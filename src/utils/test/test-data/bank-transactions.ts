import {
  BankingTransactionAdatreePersoneticsCategoryNameEnum,
  BankingTransactionExtendedDataExtensionUTypeEnum,
  BankingTransactionExtendedDataServiceEnum,
  BankingTransactionList,
  BankingTransactionStatusEnum,
  BankingTransactionTypeEnum,
  BankingTransactionAdatreePersoneticsSubCategoryNameEnum,
} from '../../../generated/data/api';
import { dataHolder } from './data-holders';

const bankTransactionsList = (): BankingTransactionList => {
  return {
    data: {
      transactions: [
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JoZYMDlmvywxByNbo3tNIjdVeB-r8LdndeoQVvPs76Sj0sUeI6oQyznuR5KDpq9H45A==',
          isDetailAvailable: true,
          type: BankingTransactionTypeEnum.TRANSFERINCOMING,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEPOSIT-OSKO PAYMENT Ref 2941256',
          postingDateTime: '2022-06-06T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-06-06T00:00:00+10:00',
          amount: '25.87',
          currency: 'AUD',
          reference: '2941256',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: {
            payer: 'Mr Adatree',
            payee: 'Red Bank Australia',
            extensionUType: BankingTransactionExtendedDataExtensionUTypeEnum.X2p101Payload,
            x2p101Payload: {
              extendedDescription: 'Adatree testing',
              endToEndId: 'Adatree testing',
              purposeCode: undefined,
            },
            service: BankingTransactionExtendedDataServiceEnum.X2P101,
          },
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: '2acfb31c-5a95-47eb-ad3f-acff6eb12a67',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.OtherTransfers,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.OtherTransfers,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JocwJxtgawzLnwPU4YnNzkmQB_hqpNW1NU9uOSa6-scKCI2SGGYom_R5N4H7PcxYb4Q==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.FEE,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'OVERDRAWN FEE 01-JUNE-2022',
          postingDateTime: '2022-06-02T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-06-02T00:00:00+10:00',
          amount: '-15.00',
          currency: 'AUD',
          reference: '0014013',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: '5472bac2-8ed3-42d6-8b53-5b6514e8b786',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.FeesOtherCharges,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.OtherFeesAndCharges,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JoetDUGcLbYoVDk99qpocG-kHGB5uGjWif5elS6GubdDvG2tk5zIPJEDChrxtV4eSyg==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.PAYMENT,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD PURCHASE SOME SHOP STRE PL SYDNEY AUS',
          postingDateTime: '2022-06-01T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-06-01T00:00:00+10:00',
          amount: '-8.98',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: '7905cde1-e1eb-4b7b-acdf-3df778516c2e',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Other,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.Other,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JoetDUGcLbYoVDk99qpocG-kHGB5uGjWif5elS6GubdDvw1Cx48XSA8xSWW_QC9zmIw==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.PAYMENT,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD PURCHASE TRANSPORTFORNSW TAP SYDNEY AUS',
          postingDateTime: '2022-06-01T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-06-01T00:00:00+10:00',
          amount: '-7.32',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: 'f78cae33-3513-455c-bbc3-3922af2156e2',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Transportation,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.OtherTransfers,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JoetDUGcLbYoVDk99qpocG-kHGB5uGjWif5elS6GubdDvSQa42iaaKmyPS5svAmu3mQ==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.FEE,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'ACCOUNT-KEEPING FEE',
          postingDateTime: '2022-06-01T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-06-01T00:00:00+10:00',
          amount: '-5.00',
          currency: 'AUD',
          reference: '0010003',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: 'c2c7cee5-df2b-4e74-bccf-fd5c928e666a',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.FeesOtherCharges,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.OtherFeesAndCharges,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JoWVnvjuSu3ocdvZGxLJnB1s7SbFLli0M_qJiPrv4KAIK9Wq_UxEoaTW2Y8MYZsMTJQ==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.PAYMENT,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD PURCHASE ENMORE SYDNEY AUS',
          postingDateTime: '2022-05-30T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-05-30T00:00:00+10:00',
          amount: '-50.94',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: '85ac6a5a-6680-4acd-a4ef-fcd1a05392ca',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Other,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.Other,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JoWVnvjuSu3ocdvZGxLJnB1s7SbFLli0M_qJiPrv4KAIKvtZ4Ypf-HT6-1bxbaxOnHQ==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.PAYMENT,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD PURCHASE ANOTHER SHOP SYDNEY AUS',
          postingDateTime: '2022-05-30T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-05-30T00:00:00+10:00',
          amount: '-9.00',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: '6b486d47-e449-4c68-8007-92920a85e67f',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Other,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.Other,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JoYpw1FBqK5K_hVyOHHtT4IBsD48ia7n9G0sZzvyk0-SO84OHj5OqSoFPryBZVe6V9w==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.PAYMENT,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD PURCHASE China Shop Sydney AUS',
          postingDateTime: '2022-05-27T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-05-27T00:00:00+10:00',
          amount: '-14.13',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: 'dfd48e1c-fa24-480d-ba4b-8f8723761f37',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Other,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.Other,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JodRxxITTrQ59sF7jkt_NTNqzKn_IX39-WGI7yFnFLnfsKN98IIoFD8s_5yfiCg9csg==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.PAYMENT,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD PURCHASE FOOD STORE   SYDNEY       AUS',
          postingDateTime: '2022-05-26T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-05-26T00:00:00+10:00',
          amount: '-3.80',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: '6fa5f107-1b32-4e0e-b625-712efb1071de',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Other,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.Other,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JocTLdKWGP0abTn4YGvB4r2bzZp1xhhLlXl0UgSt4ztcAYAeWsuQ6Vh4m581QOXjJQw==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.PAYMENT,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD PURCHASE Leichhardt   AUS',
          postingDateTime: '2022-05-25T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-05-25T00:00:00+10:00',
          amount: '-20.00',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: 'da643202-c096-4f1a-bd69-32cb6d2b9c07',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Other,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.Other,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JocTLdKWGP0abTn4YGvB4r2ZOaP49_AOMyjSfS1A2bN_6fGUpqLVIWYKxZ3yFIA-7Gw==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.OTHER,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD REFUND Leichhardt   AUS',
          postingDateTime: '2022-05-25T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-05-25T00:00:00+10:00',
          amount: '20.00',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: 'db93ba6f-9460-4444-81c6-624c683a4028',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Other,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.Other,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JoQJ6WYxuPm1Q6ov8SDgx5rvfAdEnGJsJ9uGiTTjTnpf78vmD1kXrLoHfsVrz4JFvhg==',
          isDetailAvailable: false,
          type: BankingTransactionTypeEnum.PAYMENT,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEBIT CARD PURCHASE BAR Sydney       AUS',
          postingDateTime: '2022-05-24T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-05-24T00:00:00+10:00',
          amount: '-11.70',
          currency: 'AUD',
          reference: '0000000',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: undefined,
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: '361ea3f1-1425-4249-929e-c140187c988d',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.Other,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.Other,
              },
            },
          },
        },
        {
          accountId: '1234ABCD-FFFF-AAAA-BBBB-1234567890AB',
          transactionId: 'idiFvP6ctOuRtzDFEP8JodoF93badrf71WgNJLmfm6oNNTrrdPWp2NdlfZ6mEvJ8Jk7o8Lr_W68WNWJF1HrdDQ==',
          isDetailAvailable: true,
          type: BankingTransactionTypeEnum.TRANSFERINCOMING,
          status: BankingTransactionStatusEnum.POSTED,
          description: 'DEPOSIT-OSKO PAYMENT Ref 2106795',
          postingDateTime: '2022-05-23T00:00:00+10:00',
          valueDateTime: undefined,
          executionDateTime: '2022-05-23T00:00:00+10:00',
          amount: '100.00',
          currency: 'AUD',
          reference: '2106795',
          merchantName: undefined,
          merchantCategoryCode: undefined,
          billerCode: undefined,
          billerName: undefined,
          crn: undefined,
          apcaNumber: undefined,
          extendedData: {
            payer: 'Mr Adatree',
            payee: 'Red Bank Australia',
            extensionUType: BankingTransactionExtendedDataExtensionUTypeEnum.X2p101Payload,
            x2p101Payload: {
              extendedDescription: 'Adatree testing',
              endToEndId: 'Adatree testing',
              purposeCode: undefined,
            },
            service: BankingTransactionExtendedDataServiceEnum.X2P101,
          },
          adatree: {
            consentId: 'abc8d9c3-6527-4349-a8fb-d1f7f90f225d',
            consumerId: 'idp|1234567890ABCDEF',
            cdrArrangementId: '8e228588-5821-4a6f-8b39-fb9c346e2158',
            dataHolderBrandId: dataHolder.yellowBank().dataHolderBrandId,
            useCaseId: 'HOME_LOAN',
            resourceId: '7a39e573-3e80-4e64-8140-cb7628329cd6',
            categorisation: {
              personetics: {
                categoryName: BankingTransactionAdatreePersoneticsCategoryNameEnum.OtherTransfers,
                subCategoryName: BankingTransactionAdatreePersoneticsSubCategoryNameEnum.OtherTransfers,
              },
            },
          },
        },
      ],
    },
    links: { self: '' },
    meta: { totalRecords: 13, totalPages: 1 },
  };
};

export const bankData = {
  bankTransactionsList,
};
