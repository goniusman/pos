"use client";
import { CategoryList } from "@/app/(appRoutes)/product/category/columns";
import { useEffect, useState } from "react";

export default function useCategory() {
  const [category, setCategory] = useState<CategoryList[]>([]);
  const [loading, setLoading] = useState(false);

  setLoading(true);

  async function fetchCategory() {
    try {
      const accessToken = localStorage.getItem("accessToken");

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

      const data = await res.json();

      setCategory(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  return { category, loading };
}
