export interface AccountingFieldValue {
  id: string;
  fieldValue: string;
  fieldValue2?: string;
}

export interface AccountingField {
  fieldId: string;
  fieldName: string;
  fieldValues: AccountingFieldValue[];
}
//delete the above types when no longer in use
export interface AccountingFeildsAPIGetResponse {
  id: number;
  fieldName: string;
  values: AccountingFeildAPIGetResponseValue[];
}

export interface AccountingFeildAPIGetResponseValue {
  id: number;
  fieldValue: string;
}
