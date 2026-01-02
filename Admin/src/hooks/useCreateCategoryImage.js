import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createCategoryImage } from "../services/apiCategories";


export function useEditCategoryImage() {
  const queryClient = useQueryClient();

  const { mutate: createCategoryImageMutate, isLoading } = useMutation({
    mutationFn: ({ categoryId, file, categoryName }) =>
      createCategoryImage(categoryId, file, categoryName),

    onSuccess: () => {
      toast.success("Category image uploaded successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    createCategoryImage: createCategoryImageMutate,
    isLoading,
  };
}
