import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddCategory } from "../../hooks/useAddCategory";

export default function AddCategoryForm({ onSuccess, onCancel }) {
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
  const { addCategory, isLoading } = useAddCategory();

  const [imagePreview, setImagePreview] = useState(null);

  const imageFile = watch("imageFile")?.[0]; // preview only

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImagePreview(URL.createObjectURL(file));
    setValue("imageFile", e.target.files, { shouldValidate: true }); // <-- important
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setValue("imageFile", null);
  };

  const onSubmit = (data) => {
    if (!data.name) return;

    addCategory(
      {
        name: data.name,
        description: data.description,
        imageFile: data.imageFile?.[0] || null, // <-- this ensures proper File object
      },
      {
        onSuccess: () => {
          reset();
          setImagePreview(null);
          onSuccess?.();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block font-semibold mb-1">Category Name *</label>
        <input
          type="text"
          {...register("name", { required: "Category name is required" })}
          className="w-full border rounded px-3 py-2"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block font-semibold mb-1">Description</label>
        <textarea
          {...register("description")}
          rows={3}
          className="w-full border rounded px-3 py-2"
        ></textarea>
      </div>

      {/* Image */}
      <div>
        <label className="block font-semibold mb-1">Category Image</label>
        {imagePreview ? (
          <div className="relative inline-block">
            <div className="h-48 w-48 overflow-hidden rounded-lg border">
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute -top-2 -right-2 h-8 w-8 bg-red-500 text-white rounded-full flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        ) : (
          <input
            type="file"
            accept="image/*"
            {...register("imageFile")}
            onChange={handleImageChange}
          />
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 disabled:opacity-50"
        >
          {isLoading ? "Adding..." : "Add Category"}
        </button>
        <button
          type="button"
          onClick={() => { reset(); setImagePreview(null); onCancel?.(); }}
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}



