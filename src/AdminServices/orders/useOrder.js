import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../AdminServices/orders/apiOrder";

export function useOrders() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrder,
  });

  const orders = Array.isArray(data) ? data : data?.data || [];

  return { isLoading, error, orders };
}
