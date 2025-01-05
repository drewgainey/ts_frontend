import { fetchAccountingFields } from "@/data/fetchAccountingFields";
import { AccountingField } from "@/types/accountingFieldtypes";
import { useEffect, useState } from "react";

export default function useAccountingFields() {
  const [accountingFields, setAccountingFields] = useState<AccountingField[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAccountingFields(true);
        setAccountingFields(data);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return { accountingFields, loading, error };
}
