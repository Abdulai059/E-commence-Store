import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProducts } from "../../AdminServices/products/apiAllProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useAllProducts() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data, error } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getAllProducts({ page }),
  });

  // Safely extract products & count after query returns
  const products = data?.products ?? [];
  const count = data?.count ?? 0;

  const pageCount = Math.ceil(count / PAGE_SIZE);

  // Prefetching
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["products", page + 1],
      queryFn: () => getAllProducts({ page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["products", page - 1],
      queryFn: () => getAllProducts({ page: page - 1 }),
    });
  }

  return { isLoading, error, products, count };
}
