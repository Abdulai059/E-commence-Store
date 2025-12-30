import { useState } from "react";

function AddCategory() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image_url: null,
  });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setFormData((prev) => ({
        ...prev,
        image_url: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setFormData((prev) => ({
      ...prev,
      image_url: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      alert("Category name is required");
      return;
    }

    setLoading(true);

    console.log("Category data to save:", {
      name: formData.name,
      description: formData.description,
      image_url: formData.image_url,
      created_at: new Date().toISOString(),
    });

    setTimeout(() => {
      setLoading(false);
      alert("Category added successfully!");
      setFormData({ name: "", description: "", image_url: null });
      setImagePreview(null);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ name: "", description: "", image_url: null });
    setImagePreview(null);
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6">
          <h1 className="text-2xl font-bold text-white">Add New Category</h1>
          <p className="mt-1 text-emerald-100">Create a new product category</p>
        </div>

        <div className="p-8">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="name">
                Category Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Electronics, Clothing, Accessories"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label
                className="mb-2 block text-sm font-semibold text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-500"
                placeholder="Brief description of this category..."
              ></textarea>
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">
                Category Image
              </label>

              {imagePreview ? (
                <div className="relative inline-block">
                  <div className="h-48 w-48 overflow-hidden rounded-lg border-2 border-gray-300">
                    <img
                      src={imagePreview}
                      alt="Category preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button
                    onClick={handleRemoveImage}
                    className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition hover:bg-red-600"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <label htmlFor="image" className="block cursor-pointer">
                  <input
                    accept="image/*"
                    type="file"
                    id="image"
                    hidden
                    onChange={handleImageUpload}
                  />
                  <div className="flex h-48 w-48 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-gray-400 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-500">
                    <svg
                      className="mb-3 h-12 w-12"
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
                    <span className="text-sm font-medium">Upload Image</span>
                    <span className="mt-1 text-xs">PNG, JPG up to 5MB</span>
                  </div>
                </label>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading || !formData.name}
                className="flex-1 transform rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Adding..." : "Add Category"}
              </button>
              <button
                onClick={handleReset}
                className="rounded-lg border-2 border-gray-300 px-8 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
