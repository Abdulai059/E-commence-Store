import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductImages } from "./apiCreateProductImages";

export function useCreateProductImages() {
  const queryClient = useQueryClient();

  const { mutate: createImages, isLoading: isCreating } = useMutation({
    mutationFn: createProductImages, // ✅ Now this references the imported function
    onSuccess: (data) => {
      const { uploadedImages, errors } = data;

      if (uploadedImages.length > 0) {
        toast.success(`${uploadedImages.length} image(s) successfully uploaded`);
        queryClient.invalidateQueries({ queryKey: ["product_images"] });
      }

      if (errors.length > 0) {
        toast.error(`${errors.length} image(s) failed to upload`);
      }
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createImages }; // Return with the new name
}
