"use client";
import { FileUploadCard } from "@/components/fileUpload";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useBankTransactions from "@/hooks/useBankTransactions";
import useERPTransactions from "@/hooks/useERPTransactions";
import { getBankTransColumns, getERPTransColumns } from "./columns";
import { DataTable } from "./data-table";
import {
  selectBankTransactionsData,
  selectErpTransactionsData,
} from "./selectors";

export default function BankFeedPage() {
  const { transactions, loading } = useBankTransactions();
  const { erpTransactions, loading: erpTransactionsLoading } =
    useERPTransactions();

  if (loading || !transactions || erpTransactionsLoading || !erpTransactions) {
    return "....";
  }

  const bankRows = selectBankTransactionsData(transactions);
  const bankColumns = getBankTransColumns();
  const erpRows = selectErpTransactionsData(erpTransactions);
  const erpColumns = getERPTransColumns();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-muted/50">
          <FileUploadCard />
        </div>
        <div className="rounded-xl bg-muted/50"></div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <Tabs defaultValue="bank">
          <TabsList className="grid  grid-cols-4">
            <TabsTrigger value="bank">Bank Transactions</TabsTrigger>
            <TabsTrigger value="erp">ERP Transactions</TabsTrigger>
            <TabsTrigger value="matches">Uncommitted Matches</TabsTrigger>
            <TabsTrigger value="journals">
              Uncommitted Journal Entries
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bank">
            <Card>
              <DataTable columns={bankColumns} data={bankRows} />
            </Card>
          </TabsContent>
          <TabsContent value="erp">
            <Card>
              <DataTable columns={erpColumns} data={erpRows} />
            </Card>
          </TabsContent>
          <TabsContent value="matches">
            <Card>Matches</Card>
          </TabsContent>
          <TabsContent value="journals">
            <Card>Uncommited Journal Entries</Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
