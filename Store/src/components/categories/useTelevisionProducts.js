import { useQuery } from "@tanstack/react-query";
import { getTelevisionProducts } from "../../services/apiProductsCategories";

export function useTelevisionProducts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["television-products"],
    queryFn: getTelevisionProducts,
  });

  return {
    isLoading,
    televisions: data || [], 
    error,
  };
}
