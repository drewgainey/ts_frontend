import { fetchAccountingFields } from "@/data/fetchAccountingFields";
import { AccountingFeildsData } from "@/types/accountingFieldtypes";
import { useEffect, useState } from "react";

export default function useAccountingFields() {
  const [accountingFields, setAccountingFields] =
    useState<AccountingFeildsData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchAccountingFields();
        const fields = { values: response.data };
        setAccountingFields(fields);
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
