import { useQuery } from "@tanstack/react-query";
import { getCurrentuser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentuser,
  });

//   console.log(user); 

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
