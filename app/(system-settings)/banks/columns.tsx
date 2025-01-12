"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableRows } from "./types";

export const columns: ColumnDef<DataTableRows>[] = [
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
    header: () => <div>Current Balance</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("currentBalance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "availableBalance",
    header: () => <div>Available Balance</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("availableBalance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    header: "GL Code",
    accessorKey: "glAccount",
  },
  {
    header: "Department",
    accessorKey: "department",
  },
];
