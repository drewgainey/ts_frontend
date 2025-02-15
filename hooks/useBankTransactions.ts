import { fetchTransactions } from "@/data/fetchTransactions";
import { BankTransaction } from "@/types/transactionTypes";
import { useEffect, useState } from "react";

export default function useBankTransactions() {
  // Need type for transactions
  const [transactions, setTransactions] = useState<BankTransaction[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchTransactions();
        setTransactions(response.data);
      } catch (err: any) {
        console.log("error");
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { transactions, loading, error };
}
