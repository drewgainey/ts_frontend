"use client";
import { formatDate } from "@/lib/util";
import { Transaction } from "@/types/types";
import { Table } from "antd";

interface Props {
  transactions: Transaction[];
}

export default function TransactionsDataTable({ transactions }: Props) {
  const transactionsData = transactions.map((trans) => {
    return {
      account_name: trans.account_name,
      amount: trans.amount,
      date: formatDate(trans.date),
      merchant_name: trans.merchant_name,
    };
  });

  const columns = [
    {
      title: "Account",
      dataIndex: "account_name",
      key: 1,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: 2,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: 3,
    },
    {
      title: "Merchant",
      dataIndex: "merchant_name",
      key: 4,
    },
  ];

  return <Table dataSource={transactionsData} columns={columns} size="small" />;
}
