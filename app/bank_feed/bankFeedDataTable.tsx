"use client";
import GLAccountSelect from "@/components/glAccountSelect";
import { formatDate, formatToUSD } from "@/lib/util";
import { AccountingFields, Transaction } from "@/types/types";
import { Table } from "antd";

interface Props {
  transactions: Transaction[];
  accountingFields: AccountingFields;
}

export default function BankFeedDataTable({
  transactions,
  accountingFields,
}: Props) {
  const transactionsData = transactions.map((trans) => {
    return {
      account_name: trans.account_name,
      amount: formatToUSD(trans.amount),
      date: formatDate(trans.date),
      description: trans.description,
      merchant_name: trans.merchant_name,
      gl_account: "",
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
      title: "Description",
      dataIndex: "description",
      key: 4,
    },
    {
      title: "Merchant",
      dataIndex: "merchant_name",
      key: 5,
    },
    // {
    //   title: "GL Account",
    //   dataIndex: "gl_account",
    //   key: 6,
    //   render: () => (
    //     <GLAccountSelect gl_accounts={accounting_fields.gl_accounts} />
    //   ),
    // },
  ];

  return (
    <Table
      dataSource={transactionsData}
      columns={columns}
      size="small"
      rowSelection={{ type: "checkbox" }}
      scroll={{ y: 55 * 5 }}
      pagination={false}
    />
  );
}
