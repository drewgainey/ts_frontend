import { fetchBanks } from "@/data/fetchBanks";
import { BankAPIGetResponse } from "@/types/bankTypes";
import { useEffect, useState } from "react";

export default function useBanks() {
  const [banks, setBanks] = useState<BankAPIGetResponse[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchBanks();
        setBanks(response.data);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { banks, loading, error };
}
