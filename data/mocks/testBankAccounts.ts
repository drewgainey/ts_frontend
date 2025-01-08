import { Bank } from "@/types/bankTypes";

export const testBanks: Bank[] = [
  {
    bankId: "1",
    institution: "Chase",
    accountName: "Operating - 1234",
    accountType: "Checking",
    availableBalance: 10000.0,
    currentBalance: 10000.0,
  },
  {
    bankId: "2",
    institution: "Chase",
    accountName: "Operating - 5678",
    accountType: "Checking",
    availableBalance: 3456.0,
    currentBalance: 3456.0,
  },
  {
    bankId: "2",
    institution: "Chase",
    accountName: "Savings - 1234",
    accountType: "Checking",
    availableBalance: 999999.0,
    currentBalance: 999999.0,
  },
];
