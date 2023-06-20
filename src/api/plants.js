export async function fetchAllPlants() {
  const response = await fetch("https://plant-plaza-api.fly.dev/api/plants");
  const result = await response.json();
  return result;
}
