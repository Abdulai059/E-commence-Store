import { useState } from "react";
import Button from "../../../ui/Button";

function AddImages() {
  const [images, setImages] = useState([
    { id: null, image_url: null, position: 0 },
    { id: null, image_url: null, position: 1 },
    { id: null, image_url: null, position: 2 },
    { id: null, image_url: null, position: 3 },
  ]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!selectedProductId) {
      alert("Please select a product first");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newImages = [...images];
      newImages[index] = {
        ...newImages[index],
        image_url: reader.result,
        product_id: selectedProductId,
        product_name: products.find((p) => p.id === selectedProductId)?.name,
      };
      setImages(newImages);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages[index] = { id: null, image_url: null, position: index };
    setImages(newImages);
  };

  const handleSaveImages = async () => {
    if (!selectedProductId) {
      alert("Please select a product");
      return;
    }

    const imagesToUpload = images.filter((img) => img.image_url && !img.id);

    if (imagesToUpload.length === 0) {
      alert("No new images to upload");
      return;
    }

    setLoading(true);

    console.log(
      "Images to upload:",
      imagesToUpload.map((img) => ({
        product_id: selectedProductId,
        image_url: img.image_url,
        position: img.position,
        product_name: img.product_name,
      })),
    );

    setTimeout(() => {
      setLoading(false);
      alert("Images uploaded successfully!");
    }, 1000);
  };

  return (
    <>
      <div className="">
        <div className="bg-green-600 px-8 py-6">
          <h1 className="text-2xl font-bold text-white">Upload Product Images</h1>
          <p className="mt-1 text-purple-100">Add images to your product gallery</p>
        </div>

        <div className="space-y-6 pt-8">
          <div>
            <label
              className="mb-2 block text-sm font-semibold text-gray-700"
              htmlFor="product-select"
            >
              Select Product 
            </label>
            <select
              id="product-select"
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Choose a product...</option>
              <option value="prod-1">Nike Pegasus 41 Shoes</option>
              <option value="prod-2">Adidas Ultraboost 22</option>
              <option value="prod-3">Puma RS-X Sneakers</option>
            </select>
          </div>

          <div>
            <label className="mb-3 block text-sm font-semibold text-gray-700">
              Product Images (Up to 4)
            </label>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {images.map((img, index) => (
                <div key={index} className="group relative">
                  <label htmlFor={`image${index}`} className="block cursor-pointer">
                    <input
                      accept="image/*"
                      type="file"
                      id={`image${index}`}
                      hidden
                      onChange={(e) => handleImageUpload(index, e)}
                    />
                    <div className="aspect-square overflow-hidden rounded-lg border-2 border-dashed border-gray-300 transition group-hover:bg-red-50 hover:border-red-300">
                      {img.image_url ? (
                        <img
                          src={img.image_url}
                          alt={`Product ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center text-gray-400 group-hover:text-red-300">
                          <svg
                            className="mb-2 h-10 w-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="text-xs font-medium">Upload Image</span>
                        </div>
                      )}
                    </div>
                  </label>

                  {img.image_url && (
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white opacity-0 shadow-lg transition group-hover:opacity-100 hover:bg-red-600"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}

                  <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    #{index + 1}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Recommended size: 800x800px. Max file size: 5MB
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              onClick={handleSaveImages}
              disabled={loading || !selectedProductId}
             
            >
              {loading ? "Uploading..." : "Save Images"}
            </Button>
            <Button
              onClick={() =>
                setImages(images.map((_, i) => ({ id: null, image_url: null, position: i })))
              }
              variation="secondary"
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddImages;
