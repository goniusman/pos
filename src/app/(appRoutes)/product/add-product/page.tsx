import AddProductForm from "@/components/add-form/AddProductForm";

export default function AddProduct() {
  return (
    <main className="md:p-5">
      <div className="p-5 bg-slate-200">
        <h2 className="text-xl ">Add product</h2>
      </div>
      <div className="bg-white p-5">
        <div className="mb-4">
          <small>
            The field labels marked with * are required input fields.
          </small>
        </div>
        <AddProductForm />
      </div>
    </main>
  );
}
