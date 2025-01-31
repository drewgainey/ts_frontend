import { fetchERPTransactions } from "@/data/fetchTransactions";
import { ERPTransaction } from "@/types/transactionTypes";
import { useEffect, useState } from "react";

export default function useERPTransactions() {
  // Need type for transactions
  const [erpTransactions, setErpTransactions] = useState<ERPTransaction[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchERPTransactions();
        setErpTransactions(response.data);
      } catch (err: any) {
        console.log("error");
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { erpTransactions, loading, error };
}
