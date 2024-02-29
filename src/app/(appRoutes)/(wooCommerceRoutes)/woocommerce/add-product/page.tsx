import AddWooProductForm from "@/components/add-form/AddWooProductForm";

export default function AddProduct() {
  return (
    <section className="md:p-5">
      <div className="p-5 bg-slate-200">
        <h2 className="text-xl ">Add product</h2>
      </div>
      <div className="bg-white p-5">
        <div className="mb-4">
          <small>
            The field labels marked with * are required input fields.
          </small>
        </div>
        <AddWooProductForm />
      </div>
    </section>
  );
}
