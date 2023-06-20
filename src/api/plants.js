export async function fetchAllPlants() {
  const response = await fetch("https://plant-plaza-api.fly.dev/api/plants");
  const result = await response.json();
  return result;
}

export async function fetchSinglePlant(id) {
  const response = await fetch(
    `https://plant-plaza-api.fly.dev/api/plants/${id}`
  );
  const result = await response.json();
  return result;
}
