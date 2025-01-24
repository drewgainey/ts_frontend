export interface GlAccountSelectOptions {
  value: string; // the current value for the GL account
  options: string[]; // the options available in the select dropdown
}

export interface DataTableBankData {
  bankId: number;
  institution: string;
  accountName: string;
  accountType: string;
  currentBalance: number;
  availableBalance: number;
  glAccount?: string;
  department?: string;
}

export type DynamicFieldData = {
  [key: string]: string | number;
};

export type DataTableRows = DataTableBankData & DynamicFieldData;
