// hooks/useDeleteCategory.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCategory } from "../services/apiCategories";

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  const { mutate: deleteCategoryMutate, isLoading, error } = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      toast.success("Category deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (err) => {
      toast.error(err.message || "Failed to delete category");
    },
  });

  return { deleteCategory: deleteCategoryMutate, isLoading, error };
}
