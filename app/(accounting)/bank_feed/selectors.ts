import { AccountingField } from "@/types/accountingFieldtypes";
import { BankTransaction } from "@/types/transactionTypes";
import { DataTableTransactions } from "./types";

export function selectUnmatchedBankTransactions(
  transactions?: BankTransaction[]
): DataTableTransactions[] {
  if (!transactions || transactions.length === 0) {
    return [];
  }
  return transactions
    .filter((trans) => trans.erp_match == false)
    .map((trans) => ({ account: trans.account_name, amount: trans.amount }));
}

export function selectMatchedBankTransactions(
  transactions?: BankTransaction[]
): DataTableTransactions[] {
  if (!transactions || transactions.length === 0) {
    return [];
  }
  return transactions
    .filter((trans) => trans.erp_match == true)
    .map((trans) => ({ account: trans.account_name, amount: trans.amount }));
}

export function selectExtraColumns(accountingFields?: AccountingField[]) {
  if (!accountingFields || accountingFields.length === 0) {
    return [];
  }
  return accountingFields.map((field) => {
    return {
      title: field.fieldName,
      dataIndex: field.fieldName,
      key: field.fieldId,
    };
  });
}
