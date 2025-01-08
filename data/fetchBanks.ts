import { testBanks } from "./mocks/testBankAccounts";

const baseUrl = process.env.NEXT_PUBLIC_DAL_BASE_URL;

export async function fetchBanks(useMock: boolean) {
  let data;
  if (useMock == false) {
    const response = await fetch(`${baseUrl}/banks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
    data = await response.json();
  } else {
    data = testBanks;
  }
  return data;
}
