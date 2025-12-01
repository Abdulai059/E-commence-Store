import { useState } from "react";
import Button from "../../../ui/Button";
import { useCreateProductImage } from "./useCreateProductImage";

export default function ProductImageForm() {
  const { createImage, isCreating } = useCreateProductImage();

  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");

  // 4 image slots with preview
  const [images, setImages] = useState([
    { file: null, preview: null },
    { file: null, preview: null },
    { file: null, preview: null },
    { file: null, preview: null },
  ]);

  // Handle file selection per slot
  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!productId) return alert("Please enter a Product ID first");

    if (file.size > 5 * 1024 * 1024)
      return alert("File must be less than 5MB");

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...images];
      newImages[index] = { file, preview: reader.result };
      setImages(newImages);
    };
    reader.readAsDataURL(file);
  };

  // Remove image from slot
  const handleRemoveImage = (index) => {
    const newImages = [...images];
    if (newImages[index].preview) URL.revokeObjectURL(newImages[index].preview);
    newImages[index] = { file: null, preview: null };
    setImages(newImages);
  };

  // Upload all selected images
  const handleSaveImages = async () => {
    if (!productId) return alert("Please enter Product ID");

    const imagesToUpload = images.filter((img) => img.file);
    if (imagesToUpload.length === 0) return alert("No images to upload");

    try {
      for (const img of imagesToUpload) {
        // Upload each image and wait for completion
        await new Promise((resolve, reject) => {
          createImage(
            { productId, productName, file: img.file },
            {
              onSuccess: () => resolve(),
              onError: (err) => reject(err),
            }
          );
        });
      }

      // Reset after upload
      setImages(images.map(() => ({ file: null, preview: null })));
      alert("All images uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed: " + err.message);
    }
  };

  // Clear all slots
  const handleClearAll = () => {
    images.forEach((img) => img.preview && URL.revokeObjectURL(img.preview));
    setImages(images.map(() => ({ file: null, preview: null })));
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 rounded bg-white p-6 shadow">
      <h2 className="text-xl font-bold">Upload Product Images</h2>

      {/* Product ID & Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Product ID</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="mt-1 block w-full rounded border px-2 py-1"
            placeholder="Enter Product ID"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 block w-full rounded border px-2 py-1"
            placeholder="Enter Product Name"
          />
        </div>
      </div>

      {/* Image Slots */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((img, index) => (
          <div key={index} className="group relative">
            <label className="block cursor-pointer">
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleImageUpload(index, e)}
                disabled={isCreating}
              />
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300">
                {img.preview ? (
                  <img
                    src={img.preview}
                    alt={`Product ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-center text-gray-400">
                    Upload Image
                  </span>
                )}
              </div>
            </label>

            {/* Remove Button */}
            {img.preview && (
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100"
                disabled={isCreating}
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button onClick={handleSaveImages} disabled={isCreating || !productId}>
          {isCreating ? "Uploading..." : "Save Images"}
        </Button>
        <Button onClick={handleClearAll} variation="secondary" disabled={isCreating}>
          Clear All
        </Button>
      </div>
    </div>
  );
}
