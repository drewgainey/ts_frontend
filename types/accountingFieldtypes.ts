export interface AccountingFieldValue {
  id: string;
  internalId: string;
  fieldValue: string;
  fieldValue2?: string;
}

export interface AccountingField {
  id: string;
  internalId: string;
  fieldName: string;
  values: AccountingFieldValue[];
}

export interface AccountingFeildsData {
  values: AccountingField[];
}
