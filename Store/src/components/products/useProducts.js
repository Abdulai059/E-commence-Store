import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Pagination
  const page = Number(searchParams.get("page")) || 1;

  const { isLoading, data, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page }),
    keepPreviousData: true,
  });

  // Safely extract products
  const products = data?.products ?? [];
  const count = data?.count ?? 0;

  // Total pages
  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Prefetching
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["products", page + 1],
      queryFn: () => getProducts({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["products", page - 1],
      queryFn: () => getProducts({ page: page - 1 }),
    });
  }

  return { isLoading, error, products, count };
}
