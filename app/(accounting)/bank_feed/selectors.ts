import { BankTransaction } from "@/types/transactionTypes";
import { DataTableTransactions } from "./types";

export function selectTransactionsData(
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
