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
