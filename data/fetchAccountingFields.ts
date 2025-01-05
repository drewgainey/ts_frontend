import { testAccountingFields } from "./mocks/testAccountingFields";

const baseUrl = process.env.NEXT_PUBLIC_DAL_BASE_URL;

export async function fetchAccountingFields(useMock: boolean) {
  let data;

  if (useMock == false) {
    const response = await fetch(`${baseUrl}/fields`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
    const data = await response.json();
  } else {
    data = testAccountingFields;
  }
  return data;
}
