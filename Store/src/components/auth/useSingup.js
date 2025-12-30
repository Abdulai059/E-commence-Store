import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useState } from "react";

export function useSignup() {
  const [showEmailVerification, setShowEmailVerification] = useState(false);

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,

    onSuccess: (data) => {
      console.log("Signup response:", data);

      // Check if email confirmation is required
      if (data.user && !data.session) {
        // Show beautiful custom component instead of toast
        setShowEmailVerification(true);
      } else {
        toast.success("Account created successfully!");
      }
    },

    onError: (error) => {
      console.error("Signup failed:", error);

      if (error.message.includes("already registered")) {
        toast.error("This email is already registered. Please sign in instead.");
      } else if (error.message.includes("Invalid email")) {
        toast.error("Please provide a valid email address.");
      } else {
        toast.error(error.message || "Failed to create account. Please try again.");
      }
    },
  });

  return {
    signup,
    isPending,
    showEmailVerification,
    setShowEmailVerification
  };
}