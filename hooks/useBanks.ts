import { fetchBanks, postBankUpates } from "@/data/banks";
import {
  BankAccountDefaultField,
  BankAccountDefaultFieldUpdates,
  BankAPIGetResponse,
} from "@/types/bankTypes";
import { useEffect, useState } from "react";

export default function useBanks() {
  const [banks, setBanks] = useState<BankAPIGetResponse[]>();
  const [banksToUpdate, setBanksToUpdate] = useState<
    BankAccountDefaultFieldUpdates[]
  >([]);
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

  const updateBank = (
    bankId: number,
    updatedData: BankAccountDefaultField[]
  ) => {
    setBanks((currentBanks) => {
      if (!currentBanks) {
        return [];
      }
      return currentBanks.map((bank) => {
        if (bank.id === bankId) {
          return { ...bank, defaultFields: updatedData };
        }
        return bank;
      });
    });

    setBanksToUpdate((prev) => {
      const index = prev.findIndex((bank) => bank.bankAccountId === bankId);
      const newBankToUpdate = {
        bankAccountId: bankId,
        defaultFields: updatedData,
      };
      if (index === -1) {
        return [...prev, newBankToUpdate];
      } else {
        const updatedBanks = [...prev];
        return updatedBanks;
      }
    });
  };

  const commitChanges = async () => {
    const success = await postBankUpates(banksToUpdate);
    setBanksToUpdate([]);
    return success;
  };

  return { banks, updateBank, commitChanges, loading, error };
}
