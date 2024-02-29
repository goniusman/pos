import HeaderActionBtn from "@/components/HeaderActionBtn";
import { CategoryList, columns } from "./columns";
import { DataTable } from "@/components/DataTable";

async function getData(): Promise<CategoryList[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      categoryName: "Laptop",
      parentCategory: "Electronics",
      noOfProducts: 10,
      stockQuantity: 100,
      price: 100,
    },
    {
      id: "728ed82f",
      categoryName: "Mobile",
      parentCategory: "Electronics",
      noOfProducts: 19,
      stockQuantity: 50,
      price: 200,
    },
    {
      id: "728ad52f",
      categoryName: "Camera",
      parentCategory: "Electronics",
      noOfProducts: 4,
      stockQuantity: 100,
      price: 100,
    },
    {
      id: "778ed52f",
      categoryName: "Charger",
      parentCategory: "Electronics",
      noOfProducts: 3,
      stockQuantity: 170,
      price: 120,
    },
    {
      id: "728ed4f",
      categoryName: "Watch",
      parentCategory: "Electronics",
      noOfProducts: 1,
      stockQuantity: 10,
      price: 50,
    },
    {
      id: "728ek52f",
      categoryName: "Monitor",
      parentCategory: "Electronics",
      noOfProducts: 10,
      stockQuantity: 100,
      price: 100,
    },
  ];
}

export default async function Category() {
  const data = await getData();
  return (
    <section className="md:p-5">
      <section>
        <DataTable columns={columns} data={data} searchOptions="categoryName" />
      </section>
    </section>
  );
}
