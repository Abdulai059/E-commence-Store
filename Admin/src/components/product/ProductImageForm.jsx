import { useEffect } from "react";
import { useProductImage } from "../../hooks/useProductImages";
import Button from "../ui/Button";

export default function ProductImageForm({ productId, initialProduct }) {
  const {
    register,
    handleSubmit,
    errors,
    imagePreviews,
    isCreating,
    handleFileChange,
    handleRemoveImage,
    handleClearAll,
    setValue,
  } = useProductImage();

  useEffect(() => {
    console.log("Product ID from parent:", productId);
    if (productId) setValue("productId", productId);
    if (initialProduct?.name) setValue("productName", initialProduct.name);
  }, [productId, setValue]);

  return (
    <div className="mx-auto max-w-4xl space-y-6 rounded bg-white p-6 shadow">
      <h2 className="text-xl font-bold">Upload Product Images</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Product ID *</label>
          <input
            type="text"
            {...register("productId", {
              required: "Product ID is required",
              validate: (value) => value.trim() !== "" || "Product ID cannot be empty",
            })}
            className="mt-1 block w-full rounded border px-2 py-1"
            disabled={isCreating}
          />
          {errors.productId && (
            <p className="mt-1 text-sm text-red-500">{errors.productId.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Product Name (Optional)</label>
          <input
            type="text"
            {...register("productName")}
            className="mt-1 block w-full rounded border px-2 py-1"
            disabled={isCreating}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="group relative">
              <label className="block cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  disabled={isCreating}
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                />

                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400">
                  {imagePreviews[index] ? (
                    <img
                      src={imagePreviews[index]}
                      alt={`Preview ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-center text-sm text-gray-400">
                      Upload Image {index + 1}
                    </span>
                  )}
                </div>
              </label>

              {imagePreviews[index] && (
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -top-2 -right-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white hover:bg-red-600"
                  disabled={isCreating}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Button onClick={handleSubmit} disabled={isCreating}>
            {isCreating ? "Uploading..." : "Save Images"}
          </Button>
          <Button
            type="button"
            variation="secondary"
            onClick={handleClearAll}
            disabled={isCreating}
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}
