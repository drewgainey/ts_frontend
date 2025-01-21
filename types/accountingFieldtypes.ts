export interface AccountingFieldValue {
  id: string;
  fieldValue: string;
  fieldValue2?: string;
}

export interface AccountingField {
  id: string;
  fieldName: string;
  values: AccountingFieldValue[];
}

export interface AccountingFeildsData {
  values: AccountingField[];
}
