"use client";

import { BankAccount } from "@/types/types";
import { Table } from "antd";

interface Props {
  bank_accounts: BankAccount[];
}

export default function BankAdminDataTable({ bank_accounts }: Props) {
  const columns = [
    {
      title: "Financial Institution",
      dataIndex: "institution_name",
      key: 1,
    },
    {
      title: "Account",
      dataIndex: "account_name",
      key: 2,
    },
    {
      title: "Account #",
      dataIndex: "mask",
      key: 3,
    },
    {
      title: "Available Balance",
      dataIndex: "balance_available",
      key: 4,
    },
    {
      title: "Default Entity",
      dataIndex: "entity",
      key: 5,
    },
    {
      title: "GL Account",
      dataIndex: "gl_account",
      key: 6,
    },
  ];

  const banksDataSource = bank_accounts.map((acct) => {
    return {
      institution_name: acct.institution_name,
      account_name: acct.account_official_name,
      mask: "****",
      balance_available: acct.balance_available,
      entity: "123 Fake Company LLC",
      gl_account: "100-000 Operating Cash",
    };
  });

  return <Table dataSource={banksDataSource} columns={columns} size="small" />;
}
