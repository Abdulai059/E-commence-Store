import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import InputField from "../../ui/InputField";
import { EmailVerificationMessage } from "../../ui/EmailVerification";
import { useSignup } from "./useSingup";

function SignupForm({
  acceptTerms,
  setAcceptTerms,
  onSwitchToLogin,
  onCloseModal,
  showEmailVerification,
  setShowEmailVerification,
}) {
  const { signup, isPending } = useSignup();
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
          setShowEmailVerification(true);
        },
      }
    );
  }

  const handleEmailVerificationClose = () => {
    setShowEmailVerification(false);
    onCloseModal?.();
  };

 
  if (showEmailVerification) {
    return <EmailVerificationMessage onClose={handleEmailVerificationClose} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">

      <InputField
        label="Full Name"
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

      {/* Password */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            className="w-full rounded-lg border px-3 py-2 pr-10"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="••••••••"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <Checkbox
        checked={acceptTerms}
        onChange={(e) => setAcceptTerms(e.target.checked)}
        label={
          <span className="text-sm text-gray-600">
            I agree to the{" "}
            <span className="font-medium text-green-600">
              Terms & Conditions
            </span>
          </span>
        }
      />

      <Button
        type="submit"
        className="w-full"
        disabled={isPending}
      >
        {isPending ? "Creating account..." : "Sign up"}
      </Button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="font-medium text-green-600"
        >
          Sign in
        </button>
      </p>
    </form>
  );
}

export default SignupForm;
