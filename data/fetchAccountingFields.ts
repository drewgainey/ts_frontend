"use server";

const baseUrl = process.env.NEXT_PUBLIC_DAL_BASE_URL;

export async function fetchAccountingFields() {
  const response = await fetch(`${baseUrl}/accounting-fields`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
  const data = await response.json();

  return data;
}
