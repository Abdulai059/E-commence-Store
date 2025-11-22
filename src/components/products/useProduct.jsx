import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { productId } = useParams();

  console.log("➡️ productId from URL:", productId);

  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
    enabled: !!productId, // Optional: only fetch if productId exists
    retry: false,
  });

  console.log("📦 fetched product:", product);
  console.log("❌ product error:", error);

  return { isLoading, product, error };
}
