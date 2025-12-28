// import { useQuery } from "@tanstack/react-query";
// import { getTopProducts } from "./apiOrder";

// export function useTopProducts(limit = 5) {
//   return useQuery({
//     queryKey: ["topProducts", limit],
//     queryFn: async () => {
//       const result = await getTopProducts(limit);
//       console.log(result);
//       return result;
//     },
//     // staleTime: 1000 * 60 * 5,
//     refetchOnWindowFocus: false,
//   });
// }
