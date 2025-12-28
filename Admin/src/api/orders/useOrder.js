import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getOrders } from "./apiOrder";
import { useSearchParams } from "react-router-dom";
import { ORDER_PAGE_SIZE } from "../../utils/constants";

export function useOrders() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Pagination
  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ["orders", page],
    queryFn: () => getOrders({ page }),
    keepPreviousData: true,
  });

  // Safely extract orders and count
  const orders = data?.data || [];
  const count = data?.count || 0;

  // Total pages
  const pageCount = Math.ceil(count / ORDER_PAGE_SIZE);

  // Prefetch next page
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["orders", page + 1],
      queryFn: () => getOrders({ page: page + 1 }),
    });
  }

  // Prefetch previous page
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["orders", page - 1],
      queryFn: () => getOrders({ page: page - 1 }),
    });
  }

  return { isLoading, error, orders, count };
}
