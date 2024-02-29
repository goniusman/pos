"use client";

import { DataTable } from "@/components/DataTable";
import { SaleProductList, columns } from "./columns";
import HeaderActionLinkBtn from "@/components/HeaderActionLinkBtn";
import { useEffect, useState } from "react";

export default function SaleList() {
  const [sale, setSale] = useState<SaleProductList[]>([]);

  async function getCategory() {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await fetch(
        "https://storemate-api-dev.azurewebsites.net/api/Sale/pull",
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

      setSale(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <section className="md:p-5">
      <HeaderActionLinkBtn path="/sale/add-sale" name="Add Sale" />
      <section>
        <DataTable columns={columns} data={sale} searchOptions="totalPrice" />
      </section>
    </section>
  );
}
