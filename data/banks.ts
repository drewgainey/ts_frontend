"use server";
import { BankAccountDefaultFieldUpdates } from "@/types/bankTypes";

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

export async function postBankUpates(
  updates: BankAccountDefaultFieldUpdates[]
) {
  const payload = {
    banksToUpdate: updates,
  };

  const body = JSON.stringify(payload);
  console.log(body);
  const reponse = await fetch(`${baseUrl}/banks/account-defaults`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  const status = reponse.status;
  return status;
}
