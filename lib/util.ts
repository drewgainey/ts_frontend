export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Format the date using toLocaleDateString
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", // Short month name (e.g., 'Oct')
    day: "numeric", // Numeric day (e.g., '4')
    year: "numeric", // Full year (e.g., '2024')
  });

  return formattedDate;
}
