export interface BankAPIGetResponse {
  id: number;
  accountId: string;
  accountName: string;
  accountOfficialName: string;
  plaidItemId?: string;
  type: string;
  subType: string;
  balance: number;
  defaultFields: BankAPIGetResponseDefaultField[];
}

export interface BankAPIGetResponseDefaultField {
  fieldName: string;
  fieldId: number;
  fieldValue: string;
  fieldValueId: number;
}

export interface BankAccountDefaultFieldUpdates {
  bankAccountId: number;
  defaultFields: BankAPIGetResponseDefaultField[];
}
