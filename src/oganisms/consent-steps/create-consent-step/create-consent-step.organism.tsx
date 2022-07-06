import React, { useState } from 'react';
import { UseCaseResponse } from '../../../generated/consent';
import { AutocompleteDropdown } from '../../../atoms/autocomplete-dropdown/autocomplete-dropdown.atom';
import { ScopeAccordion } from '../../../atoms/scope-accordion/scope-accordion.atom';
import { GeneralInformation } from '../../../atoms/general-information/general-information.atom';
import { Box, Button, Card, Typography } from '@mui/material';
import { Accreditation } from '../../../atoms/accreditation/accreditation.atom';

export type CreateConsentStepProps = {
  accreditationNumber: string;
  cdrPolicyUrl: string;
  companyName: string;
  useCase: UseCaseResponse;
  dataSharingRevocationEmail: string;
};

export const CreateConsentStep = (props: CreateConsentStepProps) => {
  const { accreditationNumber, useCase, cdrPolicyUrl, companyName, dataSharingRevocationEmail } = props;
  const [canConsent, setCanConsent] = useState(false);

  const handleScopeChange = (isAllChecked: boolean) => {
    setCanConsent(isAllChecked);
  };

  const handleCancel = () => {};

  return (
    <section>
      {useCase.dataHolders && useCase.scopes && (
        <>
          <Typography variant="body1" component="h2" sx={{ mb: 1, fontWeight: 'bold' }}>
            Choose your bank
          </Typography>
          <AutocompleteDropdown dataHolders={useCase.dataHolders} disableDataHolders={undefined} onChange={() => {}} />

          <Typography variant="body1" component="h2" sx={{ mb: 1, mt: 3, fontWeight: 'bold' }}>
            Confirm that you allow {companyName} to access the following information:
          </Typography>
          <Card sx={{ borderRadius: '4px', py: 0 }}>
            <ScopeAccordion scopes={useCase.scopes} companyName={companyName} onChange={handleScopeChange} />
          </Card>

          <Card sx={{ p: 2, mt: 3, mb: 1 }}>
            <Typography sx={{ mb: 1 }}>{companyName} can access your data for 3 months.</Typography>
            <Typography>{companyName} may access your data multiple times per day.</Typography>
          </Card>

          <Typography variant="body1" component="h2" sx={{ mb: 1, mt: 3, fontWeight: 'bold' }}>
            Key things to know before you consent
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <GeneralInformation cdrPolicyUrl={cdrPolicyUrl} dataSharingRevocationEmail={dataSharingRevocationEmail} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 4,
              flexDirection: { xs: 'column-reverse', sm: 'row' },
            }}
          >
            <Button
              sx={{ mb: 2, width: { xs: '100%', sm: '20rem' } }}
              variant="outlined"
              color="inherit"
              onClick={() => handleCancel}
            >
              Cancel
            </Button>
            <Button
              sx={{ mb: 2, width: { xs: '100%', sm: '20rem' } }}
              variant="contained"
              color="cta"
              disabled={!canConsent}
            >
              Consent
            </Button>
          </Box>

          <Box sx={{ p: 2, my: 1 }}>
            <Accreditation
              accreditationNumber={accreditationNumber}
              cdrPolicyUrl={cdrPolicyUrl}
              companyName={companyName}
            />
          </Box>
        </>
      )}
    </section>
  );
};
