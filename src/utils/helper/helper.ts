import { DateDuration, DateDurationList } from '../../consts/duration.const';
import { AccessFrequency, ConsentResponse, SharingDuration, Status, UseCaseResponse } from '../../generated/consent';
import { DataHolder } from '../../generated/dcr/api';

const sortListbyDate = (list: ConsentResponse[]): ConsentResponse[] => {
  return list.sort((a, b) => {
    const sortDateA = getConsentSortingDate(a);
    const sortDateB = getConsentSortingDate(b);

    if (sortDateA && sortDateB) {
      return sortDateA < sortDateB ? 1 : -1;
    }
    return 0;
  });
};

const getConsentSortingDate = (consent: ConsentResponse): string | undefined => {
  let sortDate = consent.created;

  if (consent.status === Status.EXPIRED) {
    sortDate = consent.sharingEndDate;
  }
  if (consent.status === Status.REVOKED) {
    sortDate = consent.revoked;
  }

  return sortDate;
};

const filterListbyStatus = (list: ConsentResponse[], filterBy: Status): ConsentResponse[] => {
  return list.filter((consent: ConsentResponse) => consent.status === filterBy);
};

const filterDataHoldersByConsentsAndUseCase = (
  dataHolders: DataHolder[],
  consents: ConsentResponse[],
  useCase: UseCaseResponse,
): DataHolder[] => {
  const filteredDataHolders = dataHolders.filter((dataHolder) => {
    return !doesConsentExistForDataHolderAndUseCase(dataHolder, consents, useCase);
  });

  return filteredDataHolders;
};

const doesConsentExistForDataHolderAndUseCase = (
  dataHolder: DataHolder,
  consents: ConsentResponse[],
  useCase: UseCaseResponse,
): boolean => {
  const alreadyExists = consents.filter((consent) => {
    return (
      consent.status === Status.ACTIVE &&
      consent.useCase?.id === useCase.id &&
      consent.dataHolderBrandId === dataHolder.dataHolderBrandId
    );
  });
  return alreadyExists.length > 0;
};

const unselectDateDurations = (duration: DateDuration[]): DateDuration[] => {
  return duration.map((duration) => {
    return { ...duration, isSelected: false };
  });
};

const accessFrequencyToString = (accessFrequency: AccessFrequency): string => {
  if (accessFrequency === AccessFrequency.ONCEOFF) {
    return 'Once-off';
  }

  return accessFrequency.charAt(0).toUpperCase() + accessFrequency.slice(1).toLowerCase();
};

const parseSharingDuration = (sharingDurations: SharingDuration[]): DateDuration[] => {
  return sharingDurations.map((sharingDuration) => {
    return DateDurationList[sharingDuration];
  });
};

export const Helper = {
  accessFrequencyToString,
  unselectDateDurations,
  filterDataHoldersByConsentsAndUseCase,
  filterListbyStatus,
  parseSharingDuration,
  sortListbyDate,
};
