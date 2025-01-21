"use client";
import * as React from "react";
import { DataTableColumnHeader } from "@/components/dataTable/DataTableColumnHeader";
import { DataTableCombobox } from "@/components/dataTable/DataTableComboBox";
import { Checkbox } from "@/components/ui/checkbox";
import { AccountingFeildsData } from "@/types/accountingFieldtypes";
import { ColumnDef, Row } from "@tanstack/react-table";
import { DataTableRows } from "./types";

export const getColumns = (
  accountingFields: AccountingFeildsData,
  updateBank: (bankId: number, updatedData: any) => void
): ColumnDef<DataTableRows>[] => {
  const baseColumns: ColumnDef<DataTableRows>[] = [
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

          const updatePayload = [
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
          ];
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
      id: "glAccountId",
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

          const updatePayload = [
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
          ];

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
      id: "departmentId",
      enableHiding: true,
    },
  ];

  const accountingFieldColumns: ColumnDef<DataTableRows>[] =
    accountingFields.values.map((field) => {
      const header = field.fieldName;
      // not sure what to use here...maybe need an internal field name/id that is not just an int
      const id = field.fieldName;
      const accessorKey = field.fieldName.toLowerCase();

      return {
        header: header,
        id: id,
        accessorKey: accessorKey,
        cell: ({ row }: { row: Row<DataTableRows> }) => {
          const [open, setOpen] = React.useState(false);

          const handleUpdateDepartment = (value: string, id: string) => {
            const bankId = row.getValue("bankId") as string;
            const bankIdNum = parseInt(bankId, 0);
            //payload need to be dynamic
            const updatePayload = [
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
            ];

            updateBank(bankIdNum, updatePayload);
          };

          const options = accountingFields.values
            .filter((value) => value.fieldName == field.fieldName)[0]
            .values.map((field) => {
              return { value: field.fieldValue, id: field.id };
            });
          const value = `${row.getValue(accessorKey)}`;

          const isSelected = row.getIsSelected();

          const comboBoxProps = {
            value: value,
            options: options,
            selectionPlaceholder: field.fieldName,
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
      };
    });

  // also needs to return a hidden column for fieldValueId. This is needed to be passed to the data table so the update methods can acccess the
  // field id's but need to be set to always hidden
  const fieldIdColumns = accountingFields.values.map(() => {
    return {
      accessorKey: "departmentId",
      id: "departmentId",
      enableHiding: true,
    };
  });

  baseColumns.push(...accountingFieldColumns);
  baseColumns.push(...fieldIdColumns);

  return baseColumns;
};
