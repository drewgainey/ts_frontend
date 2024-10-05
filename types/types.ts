export interface Transaction {
  transaction_id: string;
  account_name: string;
  account_official_name: string;
  amount: number;
  date: string; // ISO date format, can use `Date` type if needed
  merchant_name: string;
  currency: string;
  pending: boolean;
}
