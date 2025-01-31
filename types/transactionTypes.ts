export interface BankTransaction {
  transactionId: string;
  merchantName: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
  accountId: string;
  accountName: string;
}
export interface ERPTransaction {
  erpTransactionId: string;
  amount: number;
  description: string;
}
