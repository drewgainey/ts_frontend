"use client";
import { BankAccount } from "@/types/types";
import { useEffect, useState } from "react";
import BankAdminDataTable from "./bankAdminDataTable";

export default function BanksPage() {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch("http://localhost:8000/accounts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setBankAccounts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching Banks:", error);
      }
    };
    fetchBanks();
  }, []);

  return <BankAdminDataTable bank_accounts={bankAccounts} />;
}
