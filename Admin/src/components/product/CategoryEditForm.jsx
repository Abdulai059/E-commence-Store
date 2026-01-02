import { useCategories } from '../../hooks/useCategories';
import { useEditCategoryImage } from '../../hooks/useCreateCategoryImage';
import { useForm } from 'react-hook-form';

export default function CategoryEditForm({ onSuccess, onCancel }) {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const { isLoading, categories } = useCategories();
    const { createCategoryImage, isLoading: isSubmitting } = useEditCategoryImage();

    const imageFile = watch('imageFile')?.[0];

    const onSubmit = (data) => {
        if (!data.imageFile?.[0]) return;

        createCategoryImage(
            { categoryId: data.category, file: data.imageFile[0], categoryName: data.categoryName },
            { onSuccess: () => onSuccess?.() }
        );
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Category</h2>

                <div className="space-y-6">
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
                        {errors.category && (
                            <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                        )}
                    </div>



                    <div>
                        <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700 mb-2">
                            Category Image
                        </label>
                        <input
                            type="file"
                            id="imageFile"
                            accept="image/*"
                            {...register('imageFile')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer transition"
                            disabled={isSubmitting}
                        />
                        <p className="mt-1 text-sm text-gray-500">PNG, JPG, GIF up to 5MB</p>
                    </div>

                    {imageFile && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
                            <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                                <img src={URL.createObjectURL(imageFile)} alt="Category preview" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    )}

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={handleSubmit(onSubmit)}
                            disabled={isSubmitting}
                            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition font-medium"
                        >
                            {isSubmitting ? 'Updating...' : 'Update Category'}
                        </button>
                        <button
                            type="button"
                            onClick={onCancel}
                            disabled={isSubmitting}
                            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}