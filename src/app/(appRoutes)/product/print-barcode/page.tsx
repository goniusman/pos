"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function PrintBarcode() {
  const invoices: any = [
    {
      name: "Laptop",
      code: 4512,
      quantity: 2,
    },
    {
      name: "Mobile",
      code: 2215,
      quantity: 1,
    },
  ];

  const [selectedProduct, setSelectedProduct]: any = useState([]);

  const handleChange = (e: any) => {
    e.preventDefault();
    console.log("selected product", selectedProduct);
  };

  return (
    <main className="md:p-5">
      <div className="p-5 bg-slate-200">
        <h2 className="text-xl ">Print Barcode</h2>
      </div>
      <div className="bg-white p-5">
        <div className="mb-4">
          <small className="text-slate-400">
            The field labels marked with * are required input fields.
          </small>
        </div>
        <div>
          <form onSubmit={handleChange}>
            <Input
              name="productName"
              placeholder="Product Name"
              className="w-96"
              onChange={() => setSelectedProduct("product")}
            />
          </form>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice: any) => (
                <TableRow key={invoice.name}>
                  <TableCell className="font-medium">{invoice.name}</TableCell>
                  <TableCell>{invoice.code}</TableCell>
                  <TableCell>{invoice.quantity}</TableCell>
                  <TableCell>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                      onClick={() => console.log(invoice)}
                    >
                      Remove
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <p className="my-5 font-bold">Paper size: A4</p>
          <Button
            onClick={() => window.print()}
            className="bg-green-500 w-32 text-white"
          >
            Print
          </Button>
        </div>
      </div>
    </main>
  );
}
