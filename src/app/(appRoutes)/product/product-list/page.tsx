"use client";

import { DataTable } from "@/components/DataTable";
import { ProductList, columns } from "./columns";
import HeaderActionLinkBtn from "@/components/HeaderActionLinkBtn";
import useProductList from "@/hooks/useProductList";

export default function ProductList() {
  const { products } = useProductList();

  return (
    <section className="md:p-5">
      <HeaderActionLinkBtn path="/product/add-product" name="Add Product" />
      <section>
        <DataTable columns={columns} data={products} searchOptions="name" />
      </section>
    </section>
  );
}
