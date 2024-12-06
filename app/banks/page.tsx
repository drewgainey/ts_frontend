import { fetchBanks } from "@/data-access/banks";
import BankAdminDataTable from "./bankAdminDataTable";

export default async function BanksPage() {
  const bankAccounts = await fetchBanks();

  if (!bankAccounts) {
    return <h1>Loading....</h1>;
  }
  const bankAccountDataTableData = bankAccounts.accounts;

  return <BankAdminDataTable bank_accounts={bankAccountDataTableData} />;
}
