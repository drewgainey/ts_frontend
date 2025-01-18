"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "@/components/dataTable/DataTablePagination";
import { DataTableViewOptions } from "@/components/dataTable/DataTableViewOptions";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setSelectedData: React.Dispatch<React.SetStateAction<any[]>>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  setSelectedData,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      // Check ShadCn documentation to determine if I need the other state
      // sorting,
      // columnFilters,
      // columnVisibility,
      rowSelection,
    },
  });

  const selectedRowsData = React.useMemo(() => {
    const selectedRows = table.getSelectedRowModel().rows;
    return selectedRows.map((row) => {
      return {
        bankId: row.getValue("bankId"),
        glAccount: row.getValue("glAccount"),
        department: row.getValue("department"),
      };
    });
  }, [table.getSelectedRowModel, rowSelection]);

  React.useEffect(() => {
    setSelectedData(selectedRowsData);
  }, [selectedRowsData, setSelectedData]);

  return (
    <div>
      <div className="rounded-md border">
        <div className="flex">
          <div>
            <Checkbox />
            <Label>Edit</Label>
          </div>
          <DataTableViewOptions table={table} />
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}
