"use client";
import PlaidButton from "@/components/plaid/PlaidButton";
import useAccountingFields from "@/hooks/useAccountingFields";
import useBanks from "@/hooks/useBanks";
import { getColumns } from "./columns";
import { DataTable } from "./data-table";
import { selectDataTableBankData } from "./selectors";

export default function BanksPage() {
  const { banks, loading: banksLoading } = useBanks();
  const { accountingFields, loading: accountingFieldsLoading } =
    useAccountingFields();

  if (
    banksLoading ||
    accountingFieldsLoading ||
    accountingFields == undefined
  ) {
    return "loading..";
  }

  const dataTableBanks = selectDataTableBankData(banks);
  const columns = getColumns(accountingFields);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-muted/50">
          <PlaidButton />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <DataTable columns={columns} data={dataTableBanks} />
      </div>
    </div>
  );
}
