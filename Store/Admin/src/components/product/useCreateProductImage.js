import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProductImage } from "../../services/aiProductImage";

export function useCreateProductImage() {
  const queryClient = useQueryClient();

  const { mutate: createImage, isPending: isCreating } = useMutation({
    mutationFn: ({ productId, file, productName }) =>
      createProductImage(productId, file, productName),

    onSuccess: (_, variables) => {
      toast.success("Image uploaded!");
      queryClient.invalidateQueries({
        queryKey: ["product_images", variables.productId],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { createImage, isCreating };
}
