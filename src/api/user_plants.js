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
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function addPlantToUser(plantId) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `https://plant-plaza-api.fly.dev/api/user_plants`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          plantId,
        }),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function removePlantFromUser(plantId) {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `https://plant-plaza-api.fly.dev/api/user_plants`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          plantId,
        }),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
