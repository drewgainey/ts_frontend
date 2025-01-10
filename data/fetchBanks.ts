"use server";
const baseUrl = process.env.NEXT_PUBLIC_DAL_BASE_URL;

export async function fetchBanks() {
  const response = await fetch(`${baseUrl}/banks/accounts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
  const data = await response.json();

  return data;
}
