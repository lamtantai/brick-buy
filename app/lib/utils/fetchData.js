export default async function fetchData(url) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  const data = await response.json();

  return data;
}
