import { useQuery } from "@tanstack/react-query";
import { getOrderStats } from "./apiOrderStats";

export function useOrderStats() {
  return useQuery({
    queryKey: ["orderStats"],
    queryFn: getOrderStats,
  });
}
