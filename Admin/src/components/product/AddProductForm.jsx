import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import { useCategories } from "../../hooks/useCategories";
import { useAddProduct } from "../../api/products/useAddProduct";
import Checkbox from "../ui/Checkbox";
import InputField from "../ui/InputField";

function AddProductForm() {
  const { isCreating, addNewProduct } = useAddProduct();
  const { isLoading, categories } = useCategories();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const payload = {
      name: data.productName,
      description: data.productDescription,
      category_id: data.category,
      trending_colors: data.trendingColors,
      price: parseFloat(data.price),
      offer_price: data.offerPrice ? parseFloat(data.offerPrice) : null,
      stock_quantity: parseInt(data.stockQuantity),
      in_stock: !!data.inStock,
    };

    addNewProduct(payload, {
      onSuccess: () => reset(),
    });
  }

  return (
    <>
      <div className="bg-green-600 px-8 py-6">
        <h1 className="text-2xl font-bold text-white">Add New Product</h1>
        <p className="mt-1 text-gray-100">Fill in the details to add a product to your inventory</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* LEFT CARD */}
          <div className="flex-1 rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <InputField
                  {...register("productName", { required: true })}
                  type="text"
                  disabled={isCreating}
                  placeholder="Enter product name"
                  label="Product Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Product Description</label>
                <textarea
                  {...register("productDescription")}
                  rows={4}
                  disabled={isCreating}
                  placeholder="Enter product description"
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Category</label>

                <select
                  {...register("category", { required: "Category is required" })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5"
                  disabled={isLoading || !categories?.length}
                >
                  <option value="">
                    {isLoading ? "Loading categories..." : "Select Category"}
                  </option>
                  {categories?.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <InputField
                  {...register("trendingColors")}
                  type="text"
                  disabled={isCreating}
                  placeholder="Red, Blue, Green"
                  label="Trending Colors"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex-1 rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-medium">Pricing & Stock</h3>
            <div className="space-y-4">
              <div>
                <InputField
                  {...register("price", { required: true })}
                  type="number"
                  disabled={isCreating}
                  placeholder="0.00"
                  label="Product Price"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
                />
              </div>

              <div>
                <InputField
                  {...register("offerPrice")}
                  type="number"
                  disabled={isCreating}
                  placeholder="0.00"
                  label="Offer Price"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
                />
              </div>

              <div>
                <InputField
                  label="Stock Quantity"
                  {...register("stockQuantity", { required: true })}
                  type="number"
                  disabled={isCreating}
                  placeholder="0"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5"
                />
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  {...register("inStock")}
                  type="checkbox"
                  disabled={isCreating}
                  className="h-5 w-5 rounded border-gray-300"
                  defaultChecked
                />
                <label className="text-sm font-medium">Product is in stock</label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button type="submit">Add Product</Button>
          <Button type="button" variation="secondary" onClick={() => reset()}>
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddProductForm;
