import { fetchTransactions } from "@/data-access/transactions";
import { fetchERPFields } from "@/data-access/erpFields";
import BankFeedDataTable from "./bankFeedDataTable";

export default async function BankFeedPage() {
  const transactions = await fetchTransactions();
  const fields = await fetchERPFields();

  return (
    <BankFeedDataTable transactions={transactions} accountingFields={fields} />
  );
}
