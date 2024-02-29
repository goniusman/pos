"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardTabsTable } from "./DashboardTabsTable";

export function DashboardTabs() {
  const handlePrint = () => {
    const prt = document.getElementById("prt");
    const win = window.open("", "Print", "width=900,height=650");
    win?.document.write(prt?.innerHTML ?? "");
    win?.document.close();
    win?.focus();
    win?.print();
  };

  return (
    <Tabs defaultValue="product" className="w-full" id="prt">
      <CardHeader className="flex justify-between">
        <CardTitle>Product List</CardTitle>
        {/* <button
          className="px-3 py-2 bg-gray-800 text-white rounded-md"
          onClick={handlePrint}
        >
          Print
        </button> */}
      </CardHeader>
      <TabsList className="grid w-full grid-cols-3 bg-slate-200">
        <TabsTrigger value="product">Product List</TabsTrigger>
        <TabsTrigger value="purchased">Purchased List</TabsTrigger>
        <TabsTrigger value="sales">Sales List</TabsTrigger>
      </TabsList>
      <TabsContent value="product">
        <Card>
          <DashboardTabsTable />
        </Card>
      </TabsContent>
      <TabsContent value="purchased">
        <Card>
          <DashboardTabsTable />
        </Card>
      </TabsContent>
      <TabsContent value="sales">
        <Card>
          <DashboardTabsTable />
        </Card>
      </TabsContent>
    </Tabs>
  );
}
