"use client";
import useBankTransactions from "@/hooks/useBankTransactions";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import BankTransactionsTable from "./BankTransactionsTable";
import {
  selectExtraColumns,
  selectMatchedBankTransactions,
  selectUnmatchedBankTransactions,
} from "./selectors";
import useAccountingFields from "@/hooks/useAccountingFields";

export default function BankFeedPage() {
  const { transactions: bankTransactions, loading: bankTransactionsLoading } =
    useBankTransactions();
  const { accountingFields, loading: accountingFieldsLoading } =
    useAccountingFields();

  const unMatchedTransactions =
    selectUnmatchedBankTransactions(bankTransactions);
  const matchedTransactions = selectMatchedBankTransactions(bankTransactions);

  const extraColumns = selectExtraColumns(accountingFields);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Unmatched Transactions",
      children: (
        <BankTransactionsTable
          transactions={unMatchedTransactions}
          extraColumns={extraColumns}
        />
      ),
    },
    {
      key: "2",
      label: "Matched Transactions",
      children: <BankTransactionsTable transactions={matchedTransactions} />,
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  if (bankTransactionsLoading) {
    return "loading...";
  }

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
  // <BankFeedDataTable transactions={transactions} accountingFields={fields} />
}
