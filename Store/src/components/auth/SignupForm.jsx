import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import InputField from "../../ui/InputField";
import { useSignup } from "./useSingup";
import { EmailVerificationMessage } from "../../ui/EmailVerification";
import toast from "react-hot-toast";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function SignupForm({ acceptTerms, setAcceptTerms, onSwitchToLogin, onCloseModal }) {
  const { signup, isPending, showEmailVerification, setShowEmailVerification } = useSignup();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  function onSubmit(data) {
    if (!acceptTerms) {
      toast.error("You must accept the Terms & Conditions");
      return;
    }

    signup(
      {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          reset();
          setAcceptTerms(false);
        },
      }
    );
  }

  const handleEmailVerificationClose = () => {
    setShowEmailVerification(false);
    onCloseModal?.();
  };

  // If verification message should be shown, display it instead of the form
  if (showEmailVerification) {
    return <EmailVerificationMessage onClose={handleEmailVerificationClose} />;
  }

  // Otherwise show the signup form
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      <InputField
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        {...register("fullName", { required: "Full name is required" })}
      />
      {errors.fullName && (
        <p className="text-sm text-red-500">{errors.fullName.message}</p>
      )}

      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      {/* Password Field */}
      <div className="space-y-1 w-full max-w-sm mx-auto">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            placeholder="••••••••"
            className="w-full pr-10 border rounded-lg px-3 py-2"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
          </button>
        </div>
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-1 w-full max-w-sm mx-auto">
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            })}
            placeholder="••••••••"
            className="w-full pr-10 border rounded-lg px-3 py-2"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <Checkbox
        checked={acceptTerms}
        onChange={(e) => setAcceptTerms(e.target.checked)}
        label={
          <span className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="#" className="font-medium text-green-600 hover:text-green-700">
              Terms & Conditions
            </a>
          </span>
        }
      />

      <Button
        size="medium"
        variation="primary"
        className="w-full"
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Creating account..." : "Sign up"}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or</span>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-gray-600 sm:mt-6 sm:text-sm">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-sm font-medium text-green-600 hover:text-green-700"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}

export default SignupForm;