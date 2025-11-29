import Button from "../../../ui/Button";

function AddProductForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-green-600 px-8 py-6  ">
        <h1 className="text-2xl font-bold text-white">Add New Product</h1>
        <p className="mt-1 text-gray-100">Fill in the details to add a product to your inventory</p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row ">
        <div className="flex-1 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="product-name">
                Product Name
              </label>
              <input
                id="product-name"
                type="text"
                placeholder="Enter product name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="product-description">
                Product Description
              </label>
              <textarea
                id="product-description"
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 transition outline-none"
                placeholder="Enter product description"
              ></textarea>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 transition outline-none"
                required
              >
                <option value="">Select Category</option>
                {[{ name: "Electronics" }, { name: "Clothing" }, { name: "Accessories" }].map(
                  (item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ),
                )}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="trending-colors">
                Trending Colors
              </label>
              <input
                id="trending-colors"
                type="text"
                placeholder="Red, Blue, Green"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-lg bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Pricing & Stock</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="product-price">
                Product Price
              </label>
              <input
                id="product-price"
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="offer-price">
                Offer Price
              </label>
              <input
                id="offer-price"
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="stock-quantity">
                Stock Quantity
              </label>
              <input
                id="stock-quantity"
                type="number"
                placeholder="0"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition outline-none"
                required
              />
            </div>

            <div>
              <div className="flex items-center gap-3">
                <input
                  id="in-stock"
                  type="checkbox"
                  className="0 h-5 w-5 rounded border-gray-300"
                  defaultChecked
                />
                <label className="text-sm font-medium" htmlFor="in-stock">
                  Product is in stock
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <Button onClick={handleSubmit}>Add Product</Button>
        <Button variation="secondary">Cancel</Button>
      </div>
    </>
  );
}

export default AddProductForm;

{
  /* <div>
  <p className="text-base font-medium">Product Image</p>
  <div className="mt-2 flex flex-wrap items-center gap-3">
    {Array(4)
      .fill("")
      .map((_, index) => (
        <label key={index} htmlFor={`image${index}`}>
          <input accept="image/*" type="file" id={`image${index}`} hidden />
          <img
            className="max-w-24 cursor-pointer"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
            alt="uploadArea"
            width={100}
            height={100}
          />
        </label>
      ))}
  </div>
</div>; */
}
