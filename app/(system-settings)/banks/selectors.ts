import { Bank } from "@/types/bankTypes";
import { DataTableBanks } from "./types";

export function selectDataTableBankData(banks?: Bank[]): DataTableBanks[] {
  if (!banks || banks.length === 0) {
    return [];
  }
  return banks;
}
