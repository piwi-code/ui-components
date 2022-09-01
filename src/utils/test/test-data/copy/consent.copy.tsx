import React from 'react';
import { Highlight as HL } from '../../../../atoms/highlight-text/highlight-text.atom';
import { Copy } from '../../../../types/copy.type';
import { Organisation } from '../../../../types/organisation.type';

export const consentCopy = (org: Organisation): Copy['consent'] => {
  return {
    create: {
      consent_label: 'Consent',
      cancel_label: 'Cancel',
      save_label: 'Save',
      cancel_consent_message: 'Are you sure you want to cancel this consent?',
      cancel_edit_message: 'Are you sure you want to cancel editing this consent?',
      data_holder_input_label: 'Choose your data provider',
      data_holder_general_information_list_item:
        'We will never ask for your Data Holder login password. Your Data Holder will send you a one time password.',
      select_favourite_data_holder_title: 'Select your bank',
      select_more_data_holder_title: 'More banks',
      title: (name: string) => {
        return (
          <>
            <HL>{org.name}</HL> requests access to your <HL>{name}</HL> account data
          </>
        );
      },
    },
    edit: {
      scope_additional_label: (
        <>
          Add <HL>{org.name}</HL> some other
        </>
      ),
      scope_removal_label: 'Remove',
    },
    scope: {
      tooltip_label: (
        <>
          <HL>{org.name}</HL> will receive access to the following information:
        </>
      ),
    },
  };
};
