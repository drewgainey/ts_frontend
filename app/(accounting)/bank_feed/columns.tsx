import { ColumnDef } from "@tanstack/react-table";
import { DataTableTransactions } from "./types";

export function getColumns(): ColumnDef<DataTableTransactions>[] {
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
