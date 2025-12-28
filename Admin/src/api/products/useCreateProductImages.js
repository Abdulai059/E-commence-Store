import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductImages } from "./apiCreateProductImages";

export function useCreateProductImages() {
  const queryClient = useQueryClient();

  const { mutate: createImages, isLoading: isUpLoading } = useMutation({
    mutationFn: createProductImages,
    onSuccess: ({ uploadedImages, errors }) => {
      if (uploadedImages.length) {
        toast.success(`${uploadedImages.length} image(s) successfully uploaded`);
        queryClient.invalidateQueries({ queryKey: ["product_images"] });
      }
      if (errors.length) toast.error(`${errors.length} image(s) failed to upload`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpLoading, createImages };
}
