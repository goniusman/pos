"use client";

import { HeaderAddDialog } from "./HeaderAddDialog";
import { Button } from "./ui/button";
import { Plus, FilePlus2 } from "lucide-react";

export default function HeaderActionBtn({
  data,
  addCategory,
}: {
  data: any;
  addCategory: any;
}) {
  const handlePrint = () => {
    const tableContent = document.getElementById("prt");
    const printWindow = window.open("", "_blank");
    printWindow?.document.write(tableContent?.innerHTML ?? "");
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
  };

  return (
    <section className="mb-5 flex justify-between items-center">
      <div className="space-x-2">
        <HeaderAddDialog data={data} addCategory={addCategory}>
          <Button>
            <Plus className="w-5 h-5 mr-2" />
            Add Category
          </Button>
        </HeaderAddDialog>
        <Button>
          <FilePlus2 className="w-5 h-5 mr-2" />
          Import Category
        </Button>
      </div>
      <div>
        <Button onClick={handlePrint} className="bg-red-500">
          <FilePlus2 className="w-5 h-5 mr-2" />
          Print
        </Button>
      </div>
    </section>
  );
}
