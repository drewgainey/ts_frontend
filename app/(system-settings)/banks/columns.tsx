"use client";
import * as React from "react";
import { DataTableColumnHeader } from "@/components/dataTable/DataTableColumnHeader";
import { DataTableCombobox } from "@/components/dataTable/DataTableComboBox";
import { DataTableSelect } from "@/components/dataTable/DataTableSelect";
import { Checkbox } from "@/components/ui/checkbox";
import { AccountingFeildsAPIGetResponseData } from "@/types/accountingFieldtypes";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRows } from "./types";

export const getColumns = (
  accountingFields: AccountingFeildsAPIGetResponseData,
  updateBank: (bankId: number, updatedData: any) => void
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
        const [open, setOpen] = React.useState(false);

        const handleUpdateGlAccount = (value: string, id: string) => {
          const bankId = row.getValue("bankId") as string;
          const bankIdNum = parseInt(bankId, 0);

          const updatePayload = {
            defaultFields: [
              {
                fieldName: "Department",
                fieldId: 2,
                fieldValue: row.getValue("department"),
                fieldValueId: row.getValue("departmentId"),
              },
              {
                fieldName: "GL Code",
                fieldId: 1,
                fieldValue: value,
                fieldValueId: id,
              },
            ],
          };
          updateBank(bankIdNum, updatePayload);
        };

        const options = accountingFields.values
          .filter((value) => value.fieldName == "GL Code")[0]
          .values.map((field) => {
            return { value: field.fieldValue, id: field.id };
          });

        const value = `${row.getValue("glAccount")}`;
        const isSelected = row.getIsSelected();

        const comboBoxProps = {
          value: value,
          options: options,
          selectionPlaceholder: "GL Account",
          open: open,
          onOpenChange: setOpen,
          onUpdate: handleUpdateGlAccount,
        };

        if (!isSelected) {
          return (
            <div className="font-medium">
              {value !== "undefined" ? value : ""}
            </div>
          );
        }
        return <DataTableCombobox {...comboBoxProps} />;
      },
    },
    {
      accessorKey: "glAccountId",
      enableHiding: true,
    },
    {
      header: "Department",
      accessorKey: "department",
      cell: ({ row }) => {
        const [open, setOpen] = React.useState(false);

        const handleUpdateDepartment = (value: string, id: string) => {
          const bankId = row.getValue("bankId") as string;
          const bankIdNum = parseInt(bankId, 0);

          const updatePayload = {
            defaultFields: [
              {
                fieldName: "Department",
                fieldId: 2,
                fieldValue: value,
                fieldValueId: parseInt(id),
              },
              {
                fieldName: "GL Code",
                fieldId: 1,
                fieldValue: row.getValue("glAccount"),
                fieldValueId: row.getValue("glAccountId"),
              },
            ],
          };

          updateBank(bankIdNum, updatePayload);
        };

        const options = accountingFields.values
          .filter((value) => value.fieldName == "Department")[0]
          .values.map((field) => {
            return { value: field.fieldValue, id: field.id };
          });

        const value = `${row.getValue("department")}`;

        const isSelected = row.getIsSelected();

        const comboBoxProps = {
          value: value,
          options: options,
          selectionPlaceholder: "Department",
          open: open,
          onOpenChange: setOpen,
          onUpdate: handleUpdateDepartment,
        };

        if (!isSelected) {
          return (
            <div className="font-medium">
              {value !== "undefined" ? value : ""}
            </div>
          );
        }
        return <DataTableCombobox {...comboBoxProps} />;
      },
    },
    {
      accessorKey: "departmentId",
      enableHiding: true,
    },
  ];
};
