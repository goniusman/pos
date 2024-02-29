"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  productType: z.string(),
  productName: z.string().min(2, {
    message: "Product Name must be at least 2 characters.",
  }),
  productCode: z.string().min(5, {
    message: "Product Code must be at least 5 characters.",
  }),
  barcodeSymbology: z.string(),
  brandId: z.string(),
  category: z.string(),
  productUnitId: z.string(),
  productCost: z.string().min(1, {
    message: "Product Cost cannot be empty.",
  }),
  productPrice: z.string().min(1, {
    message: "Product Price cannot be empty.",
  }),
  stockAlert: z.string().min(1, {
    message: "Alert Quantity cannot be empty.",
  }),
  promotionalPrice: z.string(),
  promotionStarts: z.string(),
  promotionEnds: z.string(),
  productTax: z.string(),
  taxMethod: z.string(),
  initailStock: z.string(),
  warehouse1: z.boolean(),
  warehouse2: z.string(),
  featured: z.boolean(),
  embeddedBarcode: z.boolean(),
  productImage: z.string(),
  productDescription: z.string(),
});

export default function AddProductForm() {
  const [category, setCategory] = useState([]);
  const [productUnit, setProductUnit] = useState([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      productType: "",
      productName: "",
      productCode: "",
      barcodeSymbology: "",
      brandId: "",
      productUnitId: "",
      category: "",
      productCost: "",
      productPrice: "",
      stockAlert: "",
      promotionalPrice: "",
      promotionStarts: "",
      promotionEnds: "",
      productTax: "",
      taxMethod: "",
      warehouse1: false,
      initailStock: "",
      warehouse2: "",
      featured: false,
      embeddedBarcode: false,
      productImage: "",
      productDescription: "",
    },
  });

  console.log(form.watch());

  //Get category
  async function getCategory() {
    const accessToken = localStorage.getItem("accessToken");
    try {
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
    } catch (error) {
      console.error(error);
    }
  }

  //Get product unit
  async function getProductUnit() {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const res = await fetch(
        "https://storemate-api-dev.azurewebsites.net/api/StoreUnit/pull",
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
      setProductUnit(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCategory();
    getProductUnit();
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    try {
      const accessToken = localStorage.getItem("accessToken");

      const res = await fetch(
        "https://storemate-api-dev.azurewebsites.net/api/Product/push",
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

      const data = await res.json();

      if (data?.isSuccessful === false) {
        alert(data?.message);
      }

      if (data?.isSuccessful === true) {
        alert("Product added successfully");
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }

    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Type *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Standard</SelectItem>
                      <SelectItem value="2">Combo</SelectItem>
                      <SelectItem value="3">Digital</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU Code *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            <FormField
              control={form.control}
              name="barcodeSymbology"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Barcode Symbology *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a barcode type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="standard">FA99</SelectItem>
                      <SelectItem value="combo">TB11</SelectItem>
                      <SelectItem value="digital">BK2</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brandId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Brand..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="samsung">Samsung</SelectItem>
                      <SelectItem value="walton">Walton</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {category.map((category: any) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.categoryName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            <FormField
              control={form.control}
              name="productUnitId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Unit *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Product Unit..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {productUnit.map((unit: any) => (
                        <SelectItem key={unit.id} value={unit.id}>
                          {unit.baseUnit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Cost *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Price *</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            <FormField
              control={form.control}
              name="stockAlert"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alert Quantity</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="productTax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Tax</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Product Tax..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="combo">Combo</SelectItem>
                      <SelectItem value="digital">Digital</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="taxMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax Method</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Tax Method..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="inclusive">Inclusive</SelectItem>
                      <SelectItem value="exclusive">Exclusive</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            <FormField
              control={form.control}
              name="promotionalPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Promotional Price</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="promotionStarts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Promotional Start</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="promotionEnds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Promotional End</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            {/* checkbox here  */}
            <FormField
              control={form.control}
              name="warehouse1"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Initial Stock</FormLabel>
                    <FormDescription>
                      This feature will not work for product with variants and
                      batches
                    </FormDescription>
                    <div className="pt-5">
                      {form.watch().warehouse1 && (
                        <div>
                          <div>
                            <FormField
                              control={form.control}
                              name="initailStock"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Warehouse - 1</FormLabel>
                                  <FormControl>
                                    <Input placeholder="" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          <div>
                            <FormField
                              control={form.control}
                              name="warehouse2"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Warehouse - 2</FormLabel>
                                  <FormControl>
                                    <Input placeholder="" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="featured"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Featured</FormLabel>
                    <FormDescription>
                      Featured product will be displayed in POS
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="embeddedBarcode"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Embedded Barcode</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-3 mt-5">
            <FormField
              control={form.control}
              name="productImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="file" disabled {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 mt-5">
            <FormField
              control={form.control}
              name="productDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit">Add Product</Button>
      </form>
    </Form>
  );
}
