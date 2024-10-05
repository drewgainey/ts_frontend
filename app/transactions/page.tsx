"use client";
import { Transaction } from "@/types/types";
import { Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";
import TransactionsDataTable from "./transactionsDataTable";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:8000/account_details", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching tranactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  //Tabs
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Prepare",
      children: <TransactionsDataTable transactions={transactions} />,
    },
    {
      key: "2",
      label: "Review",
      children: <TransactionsDataTable transactions={transactions} />,
    },
  ];

  const transactionsData = transactions.map((trans) => {
    return {
      account_name: trans.account_name,
      amount: trans.amount,
      date: trans.date,
      merchant_name: trans.merchant_name,
    };
  });

  return <Tabs defaultActiveKey="1" items={items} />;
}
