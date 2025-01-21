"use client";
import useBankTransactions from "@/hooks/useBankTransactions";

export default function BankFeedPage() {
  const { transactions } = useBankTransactions();

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-muted/50"></div>
        <div className="rounded-xl bg-muted/50"></div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
    </div>
  );
}
