import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline, IoWarningOutline } from "react-icons/io5";
import Button from "../../ui/Button";
import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { updateUser, isUpdating } = useUpdateUser();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const password = watch("password");

    function onSubmit({ password }) {
        updateUser({ password }, { onSuccess: reset });
    }

    const getPasswordStrength = (pass) => {
        if (!pass) return null;
        if (pass.length < 8) return { label: "Weak", color: "bg-red-500", width: "33%" };
        if (pass.length < 12) return { label: "Medium", color: "bg-yellow-500", width: "66%" };
        return { label: "Strong", color: "bg-green-500", width: "100%" };
    };

    const strength = getPasswordStrength(password);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center p-6">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-2">Update Password</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Keep your account secure with a strong password</p>
                </div>

                {/* Password Fields */}
                <div className="space-y-6">
                    {/* New Password */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                            New Password (min 8 characters)
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter new password"
                                disabled={isUpdating}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password needs a minimum of 8 characters" },
                                })}
                                className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed ${errors.password ? "border-red-500" : "border-gray-300"}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password visibility"
                                className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                            </button>
                        </div>

                        {/* Password Strength */}
                        {strength && (
                            <div className="space-y-1">
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className={`h-full ${strength.color} transition-all duration-300`} style={{ width: strength.width }} />
                                </div>
                                <p className="text-xs text-gray-600">
                                    Password strength: <span className="font-semibold">{strength.label}</span>
                                </p>
                            </div>
                        )}

                        {errors.password && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                                <IoWarningOutline className="w-4 h-4" />
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <label htmlFor="passwordConfirm" className="block text-sm font-semibold text-gray-700">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="passwordConfirm"
                                placeholder="Confirm new password"
                                disabled={isUpdating}
                                {...register("passwordConfirm", {
                                    required: "Please confirm your password",
                                    validate: (value) => value === password || "Passwords need to match",
                                })}
                                className={`w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed ${errors.passwordConfirm ? "border-red-500" : "border-gray-300"}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                aria-label="Toggle confirm password visibility"
                                className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                {showConfirmPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                            </button>
                        </div>
                        {errors.passwordConfirm && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                                <IoWarningOutline className="w-4 h-4" />
                                {errors.passwordConfirm.message}
                            </p>
                        )}
                    </div>

                    {/* Update Button */}
                    <div className="pt-4">
                        <Button type="submit" disabled={isUpdating} className="w-full px-6 py-3">
                            {isUpdating ? "Updating..." : "Update Password"}
                        </Button>
                    </div>
                </div>

                {/* Security Tips */}
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex gap-3">
                        <IoWarningOutline className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h4 className="text-sm font-semibold text-yellow-900 mb-1">Password Security Tips</h4>
                            <ul className="text-xs text-yellow-700 space-y-1">
                                <li>• Use a mix of uppercase, lowercase, numbers, and symbols</li>
                                <li>• Avoid common words and personal information</li>
                                <li>• Don't reuse passwords across different accounts</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default UpdatePasswordForm;
