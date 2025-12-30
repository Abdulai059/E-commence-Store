
import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    
    onSuccess: (data) => {
      console.log("Signup response:", data);
      
      // Check if email confirmation is required
      if (data.user && !data.session) {
        toast.success(
          "Account created! Please check your email to verify your account.",
          { duration: 6000 }
        );
      } else {
        toast.success("Account created successfully!");
      }
    },

    onError: (error) => {
      console.error("Signup failed:", error);
      
      // Handle specific error cases
      if (error.message.includes("already registered")) {
        toast.error("This email is already registered. Please sign in instead.");
      } else if (error.message.includes("Invalid email")) {
        toast.error("Please provide a valid email address.");
      } else {
        toast.error(error.message || "Failed to create account. Please try again.");
      }
    },
  });

  return { signup, isLoading: isPending };
}