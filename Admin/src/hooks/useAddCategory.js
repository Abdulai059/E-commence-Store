import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addCategory } from "../services/apiCategories";


export function useAddCategory() {
    const queryClient = useQueryClient();

    const { mutate: addCategoryMutate, isLoading, error } = useMutation({
        mutationFn: addCategory,
        onSuccess: () => {
            toast.success("Category added successfully");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
        onError: (err) => {
            toast.error(err.message || "Failed to add category");
        },
    });

    return { addCategory: addCategoryMutate, isLoading, error };
}
