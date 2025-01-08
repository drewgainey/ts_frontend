import { fetchBanks } from "@/data/fetchBanks";
import { Bank } from "@/types/bankTypes";
import { useEffect, useState } from "react";

export default function useBanks() {
  const [banks, setBanks] = useState<Bank[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBanks(true);
        setBanks(data);
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
