import React, { ReactElement, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { ScopeResponse } from '../../generated/consent/api';
import { Card } from '../../atoms/card/card.atom';
import { ScopeListSwitch } from '../../atoms/scope-list/scope-list-switch.atom';
import { ScopeList } from '../../atoms/scope-list/scope-list.atom';
import { useConsentForm } from '../../context/consentForm.context';
import { useOrg } from '../../context/organisation.context';

export type ConsentSectionScopesProps = {
  message: string | ReactElement;
  scopes: ScopeResponse[];
  showError: boolean;
  readOnly?: boolean;
  onChange?: (isAllClicked: boolean) => void;
};

export const ConsentSectionScopes: React.FC<ConsentSectionScopesProps> = (props) => {
  const { message, showError, scopes, readOnly = false, onChange } = props;
  const [organisation] = useOrg();

  const handleChange = (isAllClicked: boolean) => {
    if (onChange) {
      onChange(isAllClicked);
    }
  };

  return (
    <>
      <Card error={showError} sx={{ mt: 1 }}>
        <Typography sx={{ mb: 1 }}>{message}</Typography>
        {readOnly && <ScopeList scopes={scopes} companyName={organisation.name} />}
        {!readOnly && <ScopeListSwitch scopes={scopes} companyName={organisation.name} onChange={handleChange} />}
      </Card>
      <Typography sx={{ mb: 1, minHeight: '2.2rem' }} variant="body2" color="error.main">
        {showError && !readOnly && 'Please select all the options.'}
      </Typography>
    </>
  );
};
