"use client";
import * as React from "react";
import { DataTableColumnHeader } from "@/components/dataTable/DataTableColumnHeader";
import { DataTableCombobox } from "@/components/dataTable/DataTableComboBox";
import { Checkbox } from "@/components/ui/checkbox";
import { AccountingField } from "@/types/accountingFieldtypes";
import { ColumnDef, Row } from "@tanstack/react-table";
import { DataTableRows } from "./types";

export const getColumns = (
  accountingFields: AccountingField[],
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
      id: "bankId",
      accessorKey: "bankId",
      sortingFn: "basic",
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
  ];

  const accountingFieldColumns: ColumnDef<DataTableRows>[] =
    accountingFields.map((field) => {
      const header = field.fieldName;
      const id = field.fieldName.toLowerCase();
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

            const updatePayload = accountingFields
              .filter((a) => a.fieldName != field.fieldName)
              .map((field) => {
                return {
                  fieldName: field.fieldName,
                  fieldId: parseInt(field.id),
                  fieldValue: row.getValue(field.fieldName.toLowerCase()),
                  fieldValueId: row.getValue(
                    `${field.fieldName}Id`.toLowerCase()
                  ),
                };
              });
            updatePayload.push({
              fieldName: field.fieldName,
              fieldId: parseInt(field.id),
              fieldValue: value,
              fieldValueId: parseInt(id),
            });
            console.log(updatePayload);
            updateBank(bankIdNum, updatePayload);
          };

          const options = accountingFields
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
                {value !== "undefined" ? value : " test"}
              </div>
            );
          }
          return <DataTableCombobox {...comboBoxProps} />;
        },
      };
    });

  // also needs to return a hidden column for fieldValueId. This is needed to be passed to the data table so the update methods can acccess the
  // field id's but need to be set to always hidden
  const fieldIdColumns = accountingFields.map((field) => {
    return {
      accessorKey: `${field.fieldName}Id`.toLowerCase(),
      id: `${field.fieldName}Id`.toLowerCase(),
      enableHiding: true,
    };
  });

  baseColumns.push(...accountingFieldColumns);
  baseColumns.push(...fieldIdColumns);

  return baseColumns;
};
