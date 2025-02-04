import React, { useState } from 'react';
import { ConsentResponse, DataHolder, UseCaseResponse } from '../../generated/consent';
import { MaxAccountConnectedMessage } from '../../atoms/max-account-connected-message/max-account-connected-message.atom';
import { Helper } from '../../utils/helper/helper';
import { ConsentInputDataHolder } from '../consent-inputs/consent-input-data-holder.organism';
import { ConsentCreateForm } from './consent-create-form.organism';
import { useConsentForm } from '../../context/consentForm.context';
import { useDataRecipients } from '../../context/data-recipient.context';
import { InsightResponse } from '../../types/insight-response.type';
import { ConsentInsightForm } from './consent-insight-form.organism';

export type ConsentCreateProps = {
  existingConsents: ConsentResponse[];
  useCase: UseCaseResponse;
  blockedDataHolderList?: DataHolder[];
  enablePartnerMessageDiscreetMode?: boolean;
  favouriteDataHolders?: DataHolder[];
  hideMaxAccountConnectedBackButton?: boolean;
  allowMultiConsentsPerDataHolder?: boolean;
  insightResponse?: InsightResponse;
  onCancel: () => void;
  onSubmit: () => void;
  onNotListedClick?: () => void;
};

export const ConsentCreate = (props: ConsentCreateProps) => {
  const {
    existingConsents,
    useCase,
    blockedDataHolderList = [],
    enablePartnerMessageDiscreetMode = false,
    favouriteDataHolders,
    hideMaxAccountConnectedBackButton = false,
    allowMultiConsentsPerDataHolder = false,
    insightResponse,
    onCancel,
    onSubmit,
    onNotListedClick,
  } = props;
  const [consentForm] = useConsentForm();
  const [showInsights, setShowInsights] = useState<boolean>(insightResponse !== undefined);
  const { dataRecipients } = useDataRecipients();

  let disableDataHolders: DataHolder[] = [];

  if (!allowMultiConsentsPerDataHolder) {
    disableDataHolders = Helper.filterDataHoldersByConsentsAndUseCase(useCase.dataHolders, existingConsents, useCase);
  }

  const handleInsightsSubmit = () => {
    setShowInsights(false);
  };

  const handleCancel = () => {
    onCancel();
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <section>
      {useCase.dataHolders && useCase.scopes && useCase.dataHolders.length > disableDataHolders.length && (
        <>
          {!consentForm.dataHolder && (
            <ConsentInputDataHolder
              disableDataHolders={disableDataHolders}
              useCase={useCase}
              favouriteDataHolders={favouriteDataHolders}
              blockedDataHolderList={blockedDataHolderList}
              onCancel={handleCancel}
              onNotListedClick={onNotListedClick}
            />
          )}
          {consentForm.dataHolder && showInsights && insightResponse && (
            <ConsentInsightForm
              insightResponse={insightResponse}
              onCancel={handleCancel}
              onSubmit={handleInsightsSubmit}
            />
          )}
          {consentForm.dataHolder && !showInsights && (
            <ConsentCreateForm
              enablePartnerMessageDiscreetMode={enablePartnerMessageDiscreetMode}
              useCase={useCase}
              dataHandlers={dataRecipients}
              insightResponse={insightResponse}
              onCancel={handleCancel}
              onSubmit={handleSubmit}
            />
          )}
        </>
      )}

      {useCase.dataHolders && useCase.dataHolders.length === disableDataHolders.length && (
        <MaxAccountConnectedMessage
          useCase={useCase}
          hideBackButton={hideMaxAccountConnectedBackButton}
          onClick={handleCancel}
        />
      )}
    </section>
  );
};
