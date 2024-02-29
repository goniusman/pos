import AddSaleForm from "@/components/add-form/AddSaleForm";

export default function AddSale() {
  return (
    <main className="md:p-5">
      <div className="p-5 bg-slate-200">
        <h2 className="text-xl ">Add Sale</h2>
      </div>
      <div className="bg-white p-5">
        <div className="mb-4">
          <small>
            The field labels marked with * are required input fields.
          </small>
        </div>
        <AddSaleForm />
      </div>
    </main>
  );
}
