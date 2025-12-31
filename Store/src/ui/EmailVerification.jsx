import { MdMail, MdCheckCircle } from "react-icons/md";
import { useEffect } from "react";
import Button from "./Button";

export function EmailVerificationMessage({ onClose }) {
    useEffect(() => {
        // Auto-close after 10 seconds
        const timer = setTimeout(() => {
            onClose?.();
        }, 1000500);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="w-full max-w-full rounded-xl  sm:max-w-md  text-center">
            {/* Animated Icon */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse" />
                    <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-5">
                        <MdMail size={18} className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 right-1">
                        <MdCheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
                    </div>
                </div>
            </div>

            {/* Message */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                    Account Created! 🎉
                </h3>

                <p className="text-gray-600 leading-relaxed px-4">
                    We've sent a verification link to your email.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                    <p className="text-sm text-green-800">
                        💡 <strong>Tip:</strong> Don't forget to check your spam folder if you don't see the email.
                    </p>
                </div>

                {/* Action button */}
                <Button
                    onClick={onClose}
                    size="medium"
                    variation="primary"
                    className="w-full mt-6"
                >
                    Got it!
                </Button>
            </div>
        </div>
    );
}