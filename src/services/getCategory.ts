export const getCategoryServer = async (accessToken: string) => {
  try {
    const res = await fetch(
      "https://storemate-api-dev.azurewebsites.net/api/Category/pull",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          ApiKey: "c12c49a4-66b8-499f-9d30-4cfb907f7270",
        },
        body: JSON.stringify({
          skip: 0,
          take: 20,
        }),
      }
    );
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
