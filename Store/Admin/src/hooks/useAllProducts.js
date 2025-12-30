import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllProducts } from "../api/products/apiAllProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

export function useAllProducts(customPageSize) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //default PAGE_SIZE
  const pageSize = customPageSize || PAGE_SIZE;

  const { isLoading, data, error } = useQuery({
    queryKey: ["products", page, pageSize],
    queryFn: () => getAllProducts({ page, pageSize }),
  });

  // Safely extract products & count after query returns
  const products = data?.products ?? [];
  const count = data?.count ?? 0;

  const pageCount = Math.ceil(count / pageSize);

  // Prefetching
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["products", page + 1, pageSize],
      queryFn: () => getAllProducts({ page: page + 1, pageSize }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["products", page - 1, pageSize],
      queryFn: () => getAllProducts({ page: page - 1, pageSize }),
    });
  }

  return { isLoading, error, products, count, pageCount };
}
