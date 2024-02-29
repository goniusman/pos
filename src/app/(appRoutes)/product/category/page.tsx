"use client";
import HeaderActionBtn from "@/components/HeaderActionBtn";
import { CategoryList, columns } from "./columns";
import { DataTable } from "@/components/DataTable";
import {
  getAccessToken,
  getUserInfo,
  removeUserInfo,
} from "@/services/auth.service";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Category() {
  const [category, setCategory] = useState<CategoryList[]>([]);
  const [parenCategory, setParentCategory] = useState<CategoryList[]>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function getCategory() {
    setLoading(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken);

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

      setCategory(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getParentCategory() {
    try {
      const accessToken = localStorage?.getItem("accessToken");

      const res = await fetch(
        "https://storemate-api-dev.azurewebsites.net/api/ParentCategory/pull",
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

      if (!res.ok) {
        throw new Error("HTTP Error! Status: " + res.status);
      }

      const data = await res.json();

      setParentCategory(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addCategory(values: any) {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await fetch(
        "https://storemate-api-dev.azurewebsites.net/api/Category/push",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            ApiKey: "c12c49a4-66b8-499f-9d30-4cfb907f7270",
          },
          body: JSON.stringify(values),
        }
      );

      if (res.status === 401) {
        removeUserInfo();
        router.push("/");
      }

      const data = await res.json();

      if (data?.isSuccessful === false) {
        alert(data?.message);
      }

      if (data?.isSuccessful === true) {
        getCategory();
        alert("Category added successfully");
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getParentCategory();
    getCategory();
  }, []);

  return (
    <section className="md:p-5">
      <HeaderActionBtn data={parenCategory} addCategory={addCategory} />
      <section className="overflow-x-auto">
        <DataTable
          columns={columns}
          data={category}
          searchOptions="categoryName"
        />
      </section>
    </section>
  );
}
