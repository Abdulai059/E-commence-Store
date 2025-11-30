import { useState } from "react";
import Button from "../../../ui/Button";
import { useCreateProductImage } from "../../../AdminServices/products/useCreateProductImage";

export default function ProductImageForm() {
  const { createImage, isCreating } = useCreateProductImage();

  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");

  const [images, setImages] = useState([
    { file: null, preview: null, position: 0 },
    { file: null, preview: null, position: 1 },
    { file: null, preview: null, position: 2 },
    { file: null, preview: null, position: 3 },
  ]);

  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!productId) return alert("Please enter a Product ID first");

    // Validate file size
    if (file.size > 5 * 1024 * 1024) return alert("File must be less than 5MB");

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...images];
      newImages[index] = {
        file,
        preview: reader.result,
        position: index + 1,
      };
      setImages(newImages);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    if (newImages[index].preview) URL.revokeObjectURL(newImages[index].preview);
    newImages[index] = { file: null, preview: null, position: index + 1 };
    setImages(newImages);
  };

  const handleSaveImages = async () => {
    if (!productId) return alert("Please enter Product ID");

    const imagesToUpload = images.filter((img) => img.file);

    if (imagesToUpload.length === 0) return alert("No images to upload");

    try {
      for (const img of imagesToUpload) {
        await new Promise((resolve, reject) => {
          createImage(
            {
              productId,
              productName,
              file: img.file,
              position: img.position,
            },
            {
              onSuccess: () => resolve(),
              onError: (err) => reject(err),
            }
          );
        });
      }

      setImages(images.map((_, i) => ({ file: null, preview: null, position: i + 1 })));
      alert("All images uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  const handleClearAll = () => {
    images.forEach((img) => img.preview && URL.revokeObjectURL(img.preview));
    setImages(images.map((_, i) => ({ file: null, preview: null, position: i + 1 })));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow space-y-6">
      <h2 className="text-xl font-bold">Upload Product Images</h2>

      {/* Product ID & Name */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Product ID</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
            placeholder="Enter Product ID"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 block w-full border rounded px-2 py-1"
            placeholder="Enter Product Name"
          />
        </div>
      </div>

      {/* Image Slots */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <label className="block cursor-pointer">
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleImageUpload(index, e)}
                disabled={isCreating}
              />
              <div className="aspect-square overflow-hidden rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                {img.preview ? (
                  <img src={img.preview} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-400 text-center">Upload Image</span>
                )}
              </div>
            </label>

            {/* Remove Button */}
            {img.preview && (
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                disabled={isCreating}
              >
                ✕
              </button>
            )}

            {/* Position Label */}
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-1 rounded">
              #{img.position}
            </div>
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
