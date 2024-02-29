import { DataTable } from "@/components/DataTable";
import HeaderActionBtn from "@/components/HeaderActionBtn";
import { ProductList, columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

async function getData(): Promise<ProductList[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed5d2f",
      order: "Speaker 1000W 5.1 Channel Home Theater System",
      shipTo: "Rajshahi, Bangladesh",
      date: new Date(),
      total: 14000,
      profit: 10000,
      quantity: 10,
    },
    {
      id: "728ed5d2f",
      order: "Hp Laptop",
      shipTo: "Cumilla, Bangladesh",
      date: new Date(),
      total: 14000,
      profit: 10000,
      quantity: 10,
    },
    {
      id: "728ed5d2f",
      order: "New iPhone 15",
      shipTo: "Dhaka, Bangladesh",
      date: new Date(),
      total: 14000,
      profit: 10000,
      quantity: 10,
    },
    {
      id: "728ed5d2f",
      order: "Macbook Pro",
      shipTo: "Chittagong, Bangladesh",
      date: new Date(),
      total: 110000,
      profit: 20000,
      quantity: 1,
    },
    {
      id: "728ed5d2f",
      order: "AirPods Pro",
      shipTo: "Dhaka, Bangladesh",
      date: new Date(),
      total: 24000,
      profit: 7000,
      quantity: 2,
    },
  ];
}

export default async function OrderList() {
  const data = await getData();

  return (
    <section className="md:p-5">
      <section className="mb-10">
        <Link href="/woocommerce/get-order">
          <Button>
            <Plus className="w-5 h-5 mr-2" />
            Get Order
          </Button>
        </Link>
      </section>
      <section>
        <DataTable columns={columns} data={data} searchOptions="order" />
      </section>
    </section>
  );
}
