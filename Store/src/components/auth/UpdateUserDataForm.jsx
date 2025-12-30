import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
    const { user } = useUser();

    // Call all hooks unconditionally
    const { updateUser, isUpdating } = useUpdateUser();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            fullName: user?.user_metadata?.fullName || "",
            avatar: null,
        },
    });

    const [avatar, setAvatar] = useState(null);
    const [fullName, setFullName] = useState(user?.user_metadata?.fullName || "");

    function onSubmit() {
        updateUser(
            { fullName, avatar },
            {
                onSettled: () => setAvatar(null),
            }
        );
    }

    // Conditional rendering happens here, after all hooks
    if (!user) {
        return <div>Loading...</div>;
    }

    const { email } = user;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-center p-4 sm:p-6"
        >
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mt-6">
                <div className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-2">
                        Update Your Profile
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        Keep your account information up to date
                    </p>
                </div>

                {/* Email */}
                <div className="space-y-1 mb-5">
                    <label className="block text-sm font-semibold text-gray-700">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={email}
                        disabled
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed text-sm sm:text-base"
                    />
                </div>

                {/* Full Name */}
                <div className="space-y-1 mb-5">
                    <label
                        htmlFor="fullName"
                        value={fullName}
                        className="block text-sm font-semibold text-gray-700"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                        disabled={isUpdating}
                        {...register("fullName", {
                            required: true,
                            onChange: (e) => setFullName(e.target.value),
                        })}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 disabled:bg-gray-100 text-sm sm:text-base"
                    />
                </div>

                {/* Avatar */}
                <div className="space-y-2 mb-6">
                    <label className="block text-sm font-semibold text-gray-700">
                        Avatar Image
                    </label>

                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            JD
                        </div>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setAvatar(e.target.files[0])}
                            disabled={isUpdating}
                            className="w-full px-4 py-3 border border-green-200 rounded-lg file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-green-500 file:text-white file:font-medium hover:file:bg-green-700 file:transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>

                    {avatar && (
                        <div className="mt-3 flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                            <span className="text-sm text-green-700 font-medium">{avatar.name}</span>
                        </div>
                    )}
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isUpdating}
                    className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 disabled:opacity-50 text-sm sm:text-base"
                >
                    {isUpdating ? "Updating..." : "Update Account"}
                </button>

                {/* Info Box */}
                <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
                    <div className="flex gap-3">
                        <IoInformationCircleOutline className="w-5 h-5 text-blue-600" />
                        <p className="text-blue-700">
                            Use a clear profile picture and keep your name up to date.
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default UpdateUserDataForm;
