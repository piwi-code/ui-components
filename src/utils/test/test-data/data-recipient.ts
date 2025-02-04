import { DataRecipient, DataRecipientType } from '../../../types/data-recipient.type';

export const accreditedDataRecipient = (): DataRecipient => {
  return {
    complaintEmail: 'adr-complaint@example.com',
    cdrPolicyUrl: 'https://www.example.com/adr-cdr-policy',
    dataSharingRevocationEmail: 'adr.data.sharing.revocation@example.com',
    description: 'Accredited Data Recipient provides the service X.',
    logo: '/assets/images/adr-test-company-logo.png',
    name: 'Accredited Company',
    type: DataRecipientType.ACCREDITED_DATA_RECIPIENT,
  };
};

export const cdrRepresentative = (): DataRecipient => {
  return {
    complaintEmail: 'adr-complaint@example.com',
    cdrPolicyUrl: 'https://www.example.com/cdrr-cdr-policy',
    dataSharingRevocationEmail: 'cdrr.data.sharing.revocation@example.com',
    description: 'CDR representative provides the service X.',
    logo: '/assets/images/cdrr-test-company-logo.png',
    name: 'CDR Representative Company',
    type: DataRecipientType.CDR_REPRESENTATIVE,
  };
};

export const granteeRepresentative = (): DataRecipient => {
  return {
    complaintEmail: 'adr-complaint@example.com',
    cdrPolicyUrl: 'https://www.example.com/adr-cdr-policy',
    dataSharingRevocationEmail: 'adr.data.sharing.revocation@example.com',
    description: 'Grantee provides the service X.',
    logo: '/assets/images/adr-test-company-logo.png',
    name: 'Grantee Company',
    type: DataRecipientType.GRANTEE,
  };
};

export const nonAccreditedDataRecipient = (): DataRecipient => {
  return {
    complaintEmail: 'adr-complaint@example.com',
    cdrPolicyUrl: 'https://www.example.com/non-adr-cdr-policy',
    dataSharingRevocationEmail: 'adr.data.sharing.revocation@example.com',
    description: 'Non Accredited Data Recipient provides the service X.',
    logo: '/assets/images/adr-test-company-logo.png',
    name: 'Non Accredited Company',
    type: DataRecipientType.NON_ACCREDITED_DATA_RECIPIENT,
  };
};

export const trustedAdvisor = (): DataRecipient => {
  return {
    complaintEmail: 'adr-complaint@example.com',
    cdrPolicyUrl: 'https://www.example.com/ta-cdr-policy',
    dataSharingRevocationEmail: 'ta-data.sharing.revocation@example.com',
    description: 'Trusted Adviser provides the service X.',
    logo: '/assets/images/ta-test-company-logo.png',
    name: 'Trusted Advisor Company',
    type: DataRecipientType.TRUSTED_ADVISER,
  };
};

export const trustedAdvisorServiceProvider = (): DataRecipient => {
  return {
    complaintEmail: 'adr-complaint@example.com',
    cdrPolicyUrl: 'https://www.example.com/tasp-cdr-policy',
    dataSharingRevocationEmail: 'tasp-data.sharing.revocation@example.com',
    description: 'Trusted Adviser Service Provider provides the service X.',
    logo: '/assets/images/tasp-test-company-logo.png',
    name: 'Trusted Advisor Service Provider Company',
    type: DataRecipientType.TRUSTED_ADVISER_SERVICE_PROVIDER,
  };
};

const all = (): DataRecipient[] => {
  return [
    accreditedDataRecipient(),
    cdrRepresentative(),
    granteeRepresentative(),
    trustedAdvisor(),
    trustedAdvisorServiceProvider(),
  ];
};

export const dataRecipient = {
  all,
  accreditedDataRecipient,
  cdrRepresentative,
  granteeRepresentative,
  nonAccreditedDataRecipient,
  trustedAdvisor,
  trustedAdvisorServiceProvider,
};
