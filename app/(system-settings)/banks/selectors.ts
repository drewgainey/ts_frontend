import { BankAPIGetResponse } from "@/types/bankTypes";
import { DataTableBanks } from "./types";

export function selectDataTableBankData(
  banks?: BankAPIGetResponse[]
): DataTableBanks[] {
  if (!banks || banks.length === 0) {
    return [];
  }
  return banks.map((bank) => {
    return {
      bankId: bank.id,
      institution: "Chase",
      accountName: bank.accountOfficialName,
      accountType: bank.subType,
      currentBalance: bank.balance,
      availableBalance: bank.balance,
    };
  });
}
