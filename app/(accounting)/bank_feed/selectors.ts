import { BankTransaction, ERPTransaction } from "@/types/transactionTypes";
import { DataTableERPTransaction, DataTableTransactions } from "./types";

export function selectBankTransactionsData(
  transactions: BankTransaction[]
): DataTableTransactions[] {
  return transactions.map((trans) => {
    return {
      transactionid: trans.transactionId,
      accountid: trans.accountId,
      accountName: trans.accountName,
      amount: trans.amount,
      merchantName: trans.merchantName,
      category: trans.category,
      currency: trans.currency,
      date: trans.date,
    };
  });
}

export function selectErpTransactionsData(
  erpTransactions: ERPTransaction[]
): DataTableERPTransaction[] {
  return erpTransactions.map((trans) => {
    return {
      erpTransactionid: trans.erpTransactionId,
      amount: trans.amount,
      description: trans.description,
    };
  });
}
