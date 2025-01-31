import { ColumnDef } from "@tanstack/react-table";
import { DataTableERPTransaction, DataTableTransactions } from "./types";

export function getBankTransColumns(): ColumnDef<DataTableTransactions>[] {
  return [
    {
      accessorKey: "transactionid",
      id: "transactionid",
      header: "Transaction Id",
    },
    {
      accessorKey: "accountid",
      id: "accountid",
      header: "Account Id",
    },
    {
      accessorKey: "accountName",
      header: "Account",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      accessorKey: "merchantName",
      header: "Merchant",
    },
    {
      accessorKey: "category",
      header: "category",
    },
    {
      accessorKey: "currency",
      header: "currency",
    },
    {
      accessorKey: "date",
      header: "date",
    },
  ];
}

export function getERPTransColumns(): ColumnDef<DataTableERPTransaction>[] {
  return [
    {
      accessorKey: "erpTransactionid",
      id: "erpTransactionid",
      header: "erpTransactionid",
    },
    {
      accessorKey: "amount",
      id: "amount",
      header: "Amount",
    },
    {
      accessorKey: "description",
      id: "description",
      header: "description",
    },
  ];
}
