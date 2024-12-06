import { BankAccountDTO } from "@/types/dto";

const baseUrl = process.env.NEXT_PUBLIC_DAL_BASE_URL;

export async function fetchBanks() {
  const response = await fetch(`${baseUrl}/accounts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });

  const data = await response.json();

  const dto: BankAccountDTO = data;
  return dto;
}
