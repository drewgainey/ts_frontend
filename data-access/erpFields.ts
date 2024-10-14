const baseUrl = process.env.NEXT_PUBLIC_DAL_BASE_URL;

export async function fetchERPFields() {
  const response = await fetch(`${baseUrl}/fields`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
