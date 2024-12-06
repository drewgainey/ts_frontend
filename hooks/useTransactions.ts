import { useState } from "react";

export default function useTransactions() {
  const [transactions, setTransactions] = useState();

  return [transactions];
}
