import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createOrder } from "./apiOrder";

export function useAddOrder() {
  const queryClient = useQueryClient();

  const { mutate: addNewOrder, isLoading: isSubmitting } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success("New Order successfully placed");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (err) => toast.error(err?.message || "Failed to create order"),
  });

  return { isSubmitting, addNewOrder };
}
