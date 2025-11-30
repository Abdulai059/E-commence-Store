import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addProduct } from "../../services/apiProducts";

export function useAddProduct() {
  const queryClient = useQueryClient();

  const { mutate: addNewProduct, isLoading: isCreating } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      toast.success("New product successfully created");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => toast.error(err?.message || "Failed to create product"),
  });

  return { isCreating, addNewProduct };
}
