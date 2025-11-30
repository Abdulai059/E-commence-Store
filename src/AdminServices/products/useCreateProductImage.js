import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateProductImage() {
  const queryClient = useQueryClient();

  const { mutate: createImage, isPending: isCreating } = useMutation({
    mutationFn: ({ productId, file, productName }) =>
      createProductImage(productId, file, productName),

    onSuccess: (_, variables) => {
      toast.success("Image uploaded!");

      // Important: match your EXACT query key!
      queryClient.invalidateQueries({
        queryKey: ["product_images", variables.productId],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { createImage, isCreating };
}
