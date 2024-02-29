import { DataTable } from "@/components/DataTable";
import { ProductList, columns } from "./columns";
import HeaderActionLinkBtn from "@/components/HeaderActionLinkBtn";

async function getData(): Promise<ProductList[]> {
  // Fetch data from your API here.

  return [
    {
      id: "728ed5d2f",
      image: "",
      name: "Laptop",
      code: 777,
      brand: "HP",
      category: "Electronics",
      quantity: 10,
      unit: "pcs",
      price: 14000,
      cost: 10000,
    },
    {
      id: "728ed5a2f",
      image: "",
      name: "Laptop",
      code: 777,
      brand: "HP",
      category: "Electronics",
      quantity: 10,
      unit: "pcs",
      price: 15000,
      cost: 10000,
    },
    {
      id: "728ed52f",
      image: "",
      name: "Laptop",
      code: 777,
      brand: "HP",
      category: "Electronics",
      quantity: 10,
      unit: "pcs",
      price: 15000,
      cost: 10000,
    },
    {
      id: "728ead52f",
      image: "",
      name: "Laptop",
      code: 777,
      brand: "HP",
      category: "Electronics",
      quantity: 10,
      unit: "pcs",
      price: 15000,
      cost: 10000,
    },
    {
      id: "728ad52f",
      image: "",
      name: "Desktop",
      code: 777,
      brand: "HP",
      category: "Electronics",
      quantity: 10,
      unit: "pcs",
      price: 12000,
      cost: 10000,
    },
  ];
}

export default async function Products() {
  const data = await getData();

  return (
    <section className="md:p-5">
      <section className="mb-5">
        <HeaderActionLinkBtn path="/woocommerce/add-product" />
      </section>
      <section>
        <DataTable columns={columns} data={data} searchOptions="name" />
      </section>
    </section>
  );
}
