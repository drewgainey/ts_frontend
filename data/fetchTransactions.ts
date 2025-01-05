import { testTransactions } from "./mocks/testTransactions";

const baseUrl = process.env.NEXT_PUBLIC_DAL_BASE_URL;

export async function fetchTransactions(useMock: boolean) {
  let data;
  if (useMock == false) {
    const response = await fetch(`${baseUrl}/accounts/details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
    data = await response.json();
  } else {
    data = testTransactions;
  }
  return data;
}
