export interface GlAccountSelectOptions {
  value: string; // the current value for the GL account
  options: string[]; // the options available in the select dropdown
}

export interface DataTableRows {
  bankId: number;
  institution: string;
  accountName: string;
  accountType: string;
  currentBalance: number;
  availableBalance: number;
  glAccount?: string | GlAccountSelectOptions;
  department?: string;
}
