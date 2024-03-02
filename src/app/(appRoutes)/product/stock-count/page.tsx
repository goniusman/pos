import { getCookie } from "@/services/cookieService";



const accessToken = getCookie('authToken')

console.log(accessToken);

//This is server component and here accessToken is showing undefined.

const getCategory = async()=>{
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

  if(!res.ok){
    console.log('Failed to Load Data')
  }

  return res.json()
}


export default async function StockCount() {

  const data = await getCategory(); 

  console.log(data);
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h2>Welcome to StockCount: {data.length}</h2>
    </main>
  );
}
