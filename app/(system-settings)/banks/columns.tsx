"use client";

import { DataTableColumnHeader } from "@/components/dataTable/DataTableColumnHeader";
import { DataTableSelect } from "@/components/DataTableSelect";
import { Checkbox } from "@/components/ui/checkbox";
import { AccountingFeildsAPIGetResponseData } from "@/types/accountingFieldtypes";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRows } from "./types";

export const getColumns = (
  accountingFields: AccountingFeildsAPIGetResponseData
): ColumnDef<DataTableRows>[] => {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <div>
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        </div>
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "bankId",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Bank ID" />
      ),
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
      cell: ({ row }) => {
        const options = accountingFields.values
          .filter((value) => value.fieldName == "GL Code")[0]
          .values.map((field) => field.fieldValue);

        return (
          <DataTableSelect
            value={row.getValue("glAccount")}
            options={options}
          />
        );
      },
    },
    {
      header: "Department",
      accessorKey: "department",
    },
  ];
};
