import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  AccessFrequency,
  ConsentFormProvider,
  CreateConsentFlow,
  PostUsageAction,
  SharingDuration,
  TestUtil,
} from '../../lib';

export default {
  title: 'Full examples/Create consent flow',
  component: CreateConsentFlow,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CreateConsentFlow>;

const accreditationNumber = '1234-5678';
const cdrPolicyUrl = 'https://www.adatree.com.au/cdrpolicy';
const companyName = 'TestCompany';
const dataSharingRevocationEmail = 'name@example.com';
const baseConsentFormValues = {
  accessFrequency: undefined,
  checkedScopes: [],
  dataHolder: undefined,
  selectedSharingDurations: undefined,
  postUsageAction: PostUsageAction.DELETION,
  sharingEndDate: undefined,
  useCaseId: undefined,
};
const organisation = {
  accreditationNumber: accreditationNumber,
  dataSharingRevocationEmail: dataSharingRevocationEmail,
  cdrPolicyUrl: cdrPolicyUrl,
  logo: '/assets/images/test-company-logo.png',
  name: companyName,
  underCdrPrincipal: false,
};

const copy = TestUtil.testData.copy;

const handleSummit = () => {
  alert('Consent submitted');
};
const handleCancel = () => {
  alert('Consent canceled');
};

const Template: ComponentStory<typeof CreateConsentFlow> = (args) => <CreateConsentFlow {...args} />;

// ####################################

export const WithOngoingAccess = Template.bind({});
WithOngoingAccess.decorators = [
  (Story) => {
    return (
      <ConsentFormProvider initialValues={{ ...baseConsentFormValues }}>
        <Story />
      </ConsentFormProvider>
    );
  },
];

WithOngoingAccess.args = {
  copy: copy,
  existingConsents: TestUtil.testData.consent.all(),
  organisation: organisation,
  useCase: {
    ...TestUtil.testData.useCase.homeLoan(),
    sharingDurations: [SharingDuration.THREEMONTHS],
    accessFrequency: AccessFrequency.ONGOING,
  },
  onCancel: handleCancel,
  onSubmit: handleSummit,
};

// ####################################

export const WithOnceOffAccess = Template.bind({});
WithOnceOffAccess.decorators = [
  (Story) => {
    return (
      <ConsentFormProvider initialValues={{ ...baseConsentFormValues }}>
        <Story />
      </ConsentFormProvider>
    );
  },
];

WithOnceOffAccess.args = {
  copy: copy,
  organisation: organisation,
  existingConsents: TestUtil.testData.consent.all(),
  useCase: {
    ...TestUtil.testData.useCase.homeLoan(),
    sharingDurations: [SharingDuration.ONCEOFF],
    accessFrequency: AccessFrequency.ONCEOFF,
  },
  onCancel: handleCancel,
  onSubmit: handleSummit,
};

// ####################################

export const WithUnderCdrPrincipal = Template.bind({});
WithUnderCdrPrincipal.decorators = [
  (Story) => {
    return (
      <ConsentFormProvider initialValues={{ ...baseConsentFormValues }}>
        <Story />
      </ConsentFormProvider>
    );
  },
];

WithUnderCdrPrincipal.args = {
  copy: copy,
  existingConsents: TestUtil.testData.consent.all(),
  organisation: { ...organisation, underCdrPrincipal: true },
  useCase: {
    ...TestUtil.testData.useCase.homeLoan(),
    sharingDurations: [SharingDuration.ONCEOFF],
    accessFrequency: AccessFrequency.ONCEOFF,
  },
  onCancel: handleCancel,
  onSubmit: handleSummit,
};

// ####################################

export const WithSupportingParties = Template.bind({});
WithSupportingParties.decorators = [
  (Story) => {
    return (
      <ConsentFormProvider initialValues={{ ...baseConsentFormValues }}>
        <Story />
      </ConsentFormProvider>
    );
  },
];

WithSupportingParties.args = {
  copy: copy,
  organisation: organisation,
  existingConsents: TestUtil.testData.consent.all(),
  useCase: {
    ...TestUtil.testData.useCase.homeLoanWithOsps(),
    sharingDurations: [SharingDuration.ONCEOFF],
    accessFrequency: AccessFrequency.ONCEOFF,
  },
  onCancel: handleCancel,
  onSubmit: handleSummit,
};

// ####################################

export const WithLongScopes = Template.bind({});
WithLongScopes.decorators = [
  (Story) => {
    return (
      <ConsentFormProvider initialValues={{ ...baseConsentFormValues }}>
        <Story />
      </ConsentFormProvider>
    );
  },
];

WithLongScopes.args = {
  copy: copy,
  existingConsents: TestUtil.testData.consent.all(),
  organisation: organisation,
  useCase: TestUtil.testData.useCase.openEnergy(),
  onCancel: handleCancel,
  onSubmit: handleSummit,
};

// ####################################

export const WithMultiDatesAndCustom = Template.bind({});
WithMultiDatesAndCustom.decorators = [
  (Story) => {
    return (
      <ConsentFormProvider initialValues={{ ...baseConsentFormValues }}>
        <Story />
      </ConsentFormProvider>
    );
  },
];

WithMultiDatesAndCustom.args = {
  copy: copy,
  existingConsents: TestUtil.testData.consent.all(),
  organisation: organisation,
  useCase: TestUtil.testData.useCase.ongoingConsentMinScopes(),
  onCancel: handleCancel,
  onSubmit: handleSummit,
};

// ####################################

export const WithNoRemainingDataHolders = Template.bind({});
WithNoRemainingDataHolders.decorators = [
  (Story) => {
    return (
      <ConsentFormProvider initialValues={{ ...baseConsentFormValues }}>
        <Story />
      </ConsentFormProvider>
    );
  },
];

WithNoRemainingDataHolders.args = {
  copy: copy,
  existingConsents: [
    ...TestUtil.testData.consent.all(),
    ...[
      TestUtil.testData.consent.generateConsent({
        dataHolderBrandId: 'a3e0c26a-db81-491f-bfb2-90ea2da621c8',
        useCaseId: TestUtil.testData.useCase.homeLoan().id,
      }),
      TestUtil.testData.consent.generateConsent({
        dataHolderBrandId: '7a7cea5d-19c4-458b-ab79-c926455475d3',
        useCaseId: TestUtil.testData.useCase.homeLoan().id,
      }),
      TestUtil.testData.consent.generateConsent({
        dataHolderBrandId: '8a8cea5d-19c4-458b-ab79-c926455475d3',
        useCaseId: TestUtil.testData.useCase.homeLoan().id,
      }),
    ],
  ],
  organisation: organisation,
  useCase: TestUtil.testData.useCase.homeLoan(),
  onCancel: handleCancel,
  onSubmit: handleSummit,
};
