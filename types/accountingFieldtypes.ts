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
