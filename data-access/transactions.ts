const baseUrl = process.env.NEXT_PUBLIC_DAL_BASE_URL;

export async function fetchTransactions() {
  const response = await fetch(`${baseUrl}/accounts/details`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
  const data = await response.json();
  const dto = data;
  console.log(dto);
  return dto;
}
