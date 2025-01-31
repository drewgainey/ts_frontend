export interface DataTableTransactions {
  transactionid: string;
  merchantName: string;
  category: string;
  amount: number;
  currency: string;
  date: string;
  accountid: string;
  accountName: string;
}

export interface DataTableERPTransaction {
  erpTransactionid: string;
  amount: number;
  description: string;
}
