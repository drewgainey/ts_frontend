"use client";
import { fetchTransactions } from "@/data-access/transactions";
import { fetchERPFields } from "@/data-access/erpFields";
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
    const fetchTransactionsData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching tranactions:", error);
      }
    };
    fetchTransactionsData();
  }, []);

  useEffect(() => {
    const fetchAccountingFields = async () => {
      try {
        const data = await fetchERPFields();
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
