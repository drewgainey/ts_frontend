export interface Transaction {
  transaction_id: string;
  account_name: string;
  account_official_name: string;
  amount: number;
  date: string; // ISO date format, can use `Date` type if needed
  description: string;
  merchant_name: string;
  logo_url: string;
  currency: string;
  pending: boolean;
}

export interface GLAccount {
  id: number;
  gl_account_number: string;
  gl_account_name: string;
}

export interface AccountingFields {
  gl_accounts: GLAccount[];
}

export interface BankAccount {
  account_id: number;
  institution_name: string;
  account_name: string;
  account_official_name: string;
  account_type: string;
  account_subtype: string;
  mask: number;
  balance_available: number;
  balance_current: number;
}
