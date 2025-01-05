export interface BankTransaction {
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
  erp_match: boolean;
}
