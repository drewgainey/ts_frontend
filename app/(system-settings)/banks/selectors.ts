import { BankAPIGetResponse } from "@/types/bankTypes";
import { DataTableRows } from "./types";

export function selectDataTableBankData(
  banks?: BankAPIGetResponse[]
): DataTableRows[] {
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
