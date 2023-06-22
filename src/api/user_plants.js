export async function fetchUserPlants() {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `https://plant-plaza-api.fly.dev/api/user_plants`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
