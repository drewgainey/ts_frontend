import { BankTransaction } from "@/types/transactionTypes";

const testTransactions: BankTransaction[] = [
  {
    transaction_id: "1",
    account_name: "test account",
    account_official_name: "test account but official",
    amount: 100,
    date: " 2024-09-27 18:00:00.000",
    description: "First Test Transaction",
    merchant_name: "Amazon",
    logo_url: "",
    currency: "USD",
    pending: false,
    erp_match: true,
  },
  {
    transaction_id: "2",
    account_name: "test account",
    account_official_name: "test account but official",
    amount: 200,
    date: " 2024-09-27 18:00:00.000",
    description: "Second Test Transaction",
    merchant_name: "Amazon",
    logo_url: "",
    currency: "USD",
    pending: false,
    erp_match: false,
  },
  {
    transaction_id: "3",
    account_name: "test account",
    account_official_name: "test account but official",
    amount: 100,
    date: " 2024-09-27 18:00:00.000",
    description: "Third Test Transaction",
    merchant_name: "Amazon",
    logo_url: "",
    currency: "USD",
    pending: false,
    erp_match: false,
  },
];

export { testTransactions };
