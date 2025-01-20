import { fetchBanks } from "@/data/fetchBanks";
import {
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

  const updateBank = (bankId: number, updatedData: any) => {
    setBanks((currentBanks) => {
      if (!currentBanks) {
        return [];
      }
      return currentBanks.map((bank) => {
        if (bank.id === bankId) {
          return { ...bank, ...updatedData };
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
        // If the bankId is not found, add the new update
        return [...prev, newBankToUpdate];
      } else {
        // If found, replace the existing record with the new one
        const updatedBanks = [...prev];
        updatedBanks[index] = newBankToUpdate;
        return updatedBanks;
      }
    });
  };

  const commitChanges = () => {
    console.log(banksToUpdate);
  };

  return { banks, updateBank, commitChanges, loading, error };
}
