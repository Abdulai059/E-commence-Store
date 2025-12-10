import { useState } from "react";
import { useCreateProductImages } from "../../../AdminServices/products/useCreateProductImages";
import Button from "../../../ui/Button";
import toast from "react-hot-toast"; // Add this import

export default function ProductImageForm() {
  const { createImages, isCreating } = useCreateProductImages(); // ✅ Fixed

  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [imageFiles, setImageFiles] = useState([null, null, null, null]);
  const [imagePreviews, setImagePreviews] = useState([null, null, null, null]);

  // Handle file selection
  const handleFileChange = (index, file) => {
    if (!file) return;

    const newFiles = [...imageFiles];
    newFiles[index] = file;
    setImageFiles(newFiles);

    const reader = new FileReader();
    reader.onloadend = () => {
      const newPreviews = [...imagePreviews];
      newPreviews[index] = reader.result;
      setImagePreviews(newPreviews);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index) => {
    const newFiles = [...imageFiles];
    newFiles[index] = null;
    setImageFiles(newFiles);

    const newPreviews = [...imagePreviews];
    newPreviews[index] = null;
    setImagePreviews(newPreviews);
  };

  const handleClearAll = () => {
    setProductId("");
    setProductName("");
    setImageFiles([null, null, null, null]);
    setImagePreviews([null, null, null, null]);
  };

  const handleSubmit = () => {
    if (!productId.trim()) {
      toast.error("Please enter a Product ID");
      return;
    }

    const filesToUpload = imageFiles.filter((file) => file !== null);

    if (filesToUpload.length === 0) {
      toast.error("Please select at least one image");
      return;
    }

    const images = imageFiles
      .map((file, index) => {
        if (!file) return null;
        return {
          product_id: productId,
          image_url: file,
          position: index,
          product_name: productName || null,
        };
      })
      .filter(Boolean);

    createImages(images, {
      // ✅ Fixed
      onSuccess: () => {
        handleClearAll();
      },
    });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 rounded bg-white p-6 shadow">
      <h2 className="text-xl font-bold">Upload Product Images</h2>

      <div>
        <label className="block text-sm font-medium">
          Product ID <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="mt-1 block w-full rounded border px-2 py-1"
          placeholder="Enter Product ID"
          disabled={isCreating} // ✅ Fixed
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Product Name (Optional)</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="mt-1 block w-full rounded border px-2 py-1"
          placeholder="Enter Product Name"
          disabled={isCreating} // ✅ Fixed
        />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="group relative">
            <label className="block cursor-pointer">
              <input
                type="file"
                accept="image/*"
                hidden
                disabled={isCreating} // ✅ Fixed
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
                disabled={isCreating} // ✅ Fixed
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <Button onClick={handleSubmit} disabled={isCreating}>
          {" "}
          {/* ✅ Fixed */}
          {isCreating ? "Uploading..." : "Save Images"} {/* ✅ Fixed */}
        </Button>
        <Button variation="secondary" onClick={handleClearAll} disabled={isCreating}>
          {" "}
          {/* ✅ Fixed */}
          Clear All
        </Button>
      </div>
    </div>
  );
}
