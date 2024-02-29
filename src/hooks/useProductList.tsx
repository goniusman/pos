import { ProductList } from "@/app/(appRoutes)/product/product-list/columns";
import { useEffect, useState } from "react";

const useProductList = () => {
  const [products, setProducts] = useState<ProductList[]>([]);

  async function getProducts() {
    // Fetch data from your API here.

    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await fetch(
        "https://storemate-api-dev.azurewebsites.net/api/Product/pull",
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
      const data = await res.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
};

export default useProductList;
