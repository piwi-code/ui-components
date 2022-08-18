import React from 'react';
import { AppBar, Tabs, Tab, Box, Typography, Skeleton } from '@mui/material';
import { ConsentResponse, DataHolder, Status } from '../../generated/consent';
import { ConsentList } from '../../atoms/consent-list/consent-list.atom';
import { Helper } from '../../utils/helper/helper';
import { Card } from '../../atoms/card/card.atom';

export type ConsentTabsProps = {
  consents: ConsentResponse[] | undefined;
  dataHolders: DataHolder[];
  isLoading?: boolean;
  urlPrefix?: string;
};

type TabPanelProps = {
  index: number;
  value: number;
  children?: React.ReactNode;
};

export const ConsentTabs: React.FC<ConsentTabsProps> = (props) => {
  const { consents = [], dataHolders, isLoading = false, urlPrefix = '/consent/' } = props;
  const [value, setValue] = React.useState(0);

  const activeConsents = Helper.sortListbyDate(Helper.filterListbyStatus(consents, Status.ACTIVE));
  const expiredConsents = Helper.sortListbyDate(Helper.filterListbyStatus(consents, Status.EXPIRED));
  const revokedConsents = Helper.sortListbyDate(Helper.filterListbyStatus(consents, Status.REVOKED));

  Helper.filterListbyStatus(consents, Status.ACTIVE);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (event) {
      setValue(newValue);
    }
  };

  const noConsentItems = (status: string) => {
    return (
      <Typography variant="h5" sx={{ py: 5, textAlign: 'center' }}>
        You do not have any {status.toLocaleLowerCase()} consents.
      </Typography>
    );
  };

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="Consent tabs"
        >
          <Tab sx={{ textTransform: 'capitalize' }} label="Current" {...a11yProps(0)} />
          <Tab sx={{ textTransform: 'capitalize' }} label="Expired" {...a11yProps(1)} />
          <Tab sx={{ textTransform: 'capitalize' }} label="Revoked" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {isLoading && renderLoading()}
        {!isLoading && activeConsents.length > 0 && (
          <Card>
            <ConsentList consents={activeConsents} dataHolders={dataHolders} url={urlPrefix} />
          </Card>
        )}
        {!isLoading && activeConsents.length === 0 && noConsentItems(Status.ACTIVE)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isLoading && renderLoading()}
        {!isLoading && expiredConsents.length > 0 && (
          <Card>
            <ConsentList consents={expiredConsents} dataHolders={dataHolders} url={urlPrefix} />
          </Card>
        )}
        {!isLoading && expiredConsents.length === 0 && noConsentItems(Status.EXPIRED)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {isLoading && renderLoading()}
        {!isLoading && revokedConsents.length > 0 && (
          <Card>
            <ConsentList consents={revokedConsents} dataHolders={dataHolders} url={urlPrefix} />
          </Card>
        )}
        {!isLoading && revokedConsents.length === 0 && noConsentItems(Status.REVOKED)}
      </TabPanel>
    </Box>
  );
};

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`Consent-tabpanel-${index}`}
      aria-labelledby={`Consent-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ px: { xs: 0, sm: 1, md: 3 }, py: { xs: 1, sm: 2, md: 3 } }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `Consent-tab-${index}`,
    'aria-controls': `Consent-tabpanel-${index}`,
  };
};

const renderLoading = () => {
  return (
    <>
      <Skeleton height="80px" /> <Skeleton height="80px" />
    </>
  );
};
