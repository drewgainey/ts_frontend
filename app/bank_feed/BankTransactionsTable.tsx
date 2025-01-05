import { Table, TableProps } from "antd";
import { DataTableTransactions } from "./types";

interface Props {
  transactions: DataTableTransactions[];
  extraColumns?: TableProps<DataTableTransactions>["columns"];
}

export default function BankTransactionsTable({
  transactions,
  extraColumns,
}: Props) {
  let columns: TableProps<DataTableTransactions>["columns"] = [
    {
      title: "Account",
      dataIndex: "account",
      key: "1",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "2",
    },
  ];
  if (extraColumns) {
    columns = [...columns, ...extraColumns];
  }

  return <Table dataSource={transactions} columns={columns} />;
}
