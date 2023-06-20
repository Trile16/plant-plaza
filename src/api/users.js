export async function fetchUserLogin({ username, password }) {
  try {
    const response = await fetch(
      `https://plant-plaza-api.fly.dev/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
