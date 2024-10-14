"use client";
import { default_accounting_fields } from "@/lib/default_values";
import { AccountingFields, Transaction } from "@/types/types";
import { useEffect, useState } from "react";
import BankFeedDataTable from "./bankFeedDataTable";

export default function BankFeedPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [fields, setFields] = useState<AccountingFields>(
    default_accounting_fields
  );

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:8000/accounts/details", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setTransactions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching tranactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  useEffect(() => {
    const fetchAccountingFields = async () => {
      try {
        const response = await fetch("http://localhost:8000/fields", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setFields(data);
      } catch (error) {
        console.error("Error fetching tranactions:", error);
      }
    };
    fetchAccountingFields();
  }, []);
  return (
    <BankFeedDataTable transactions={transactions} accounting_fields={fields} />
  );
}
