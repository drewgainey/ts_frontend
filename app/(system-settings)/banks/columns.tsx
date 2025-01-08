"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableBanks } from "./types";

export const columns: ColumnDef<DataTableBanks>[] = [
  {
    accessorKey: "bankId",
    header: "Bank ID",
  },
  {
    accessorKey: "institution",
    header: "Institution",
  },
  {
    accessorKey: "accountName",
    header: "Account",
  },
  {
    accessorKey: "accountType",
    header: "Type",
  },
  {
    accessorKey: "currentBalance",
    header: () => <div className="text-right">Current Balance</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("currentBalance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "availableBalance",
    header: () => <div className="text-right">Available Balance</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("availableBalance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    header: "Accounting Defaults",
  },
];
