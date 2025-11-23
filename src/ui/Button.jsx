function Button({ size = "medium", variation = "primary", children, className = "", ...props }) {
  // Size classes
  const sizeClasses = {
    small: "text-[1.2rem] px-2 py-1 uppercase font-semibold text-center",
    medium: "text-base px-4 py-2.5 rounded-md font-medium",
    large: "text-[1.6rem] px-6 py-3 font-medium",
    largebtn: "text-[1.6rem] px-6 py-3 font-medium w-full my-3",
  };

  // Variation classes
  const variationClasses = {
    primary:
      "bg-gradient-to-r from-red-400 to-red-500 text-white shadow-md transition-all hover:from-red-500 hover:to-red-600",

    secondary: "text-gray-600 bg-gray-100 border border-gray-200 hover:bg-gray-50",

    danger: "text-red-100 bg-red-700 hover:bg-red-800",

    success:
      "w-full rounded-md bg-gradient-to-r from-green-400 to-teal-500 py-2.5 font-semibold text-white transition-all hover:from-green-500 hover:to-teal-600",
  };

  return (
    <button
      className={`rounded-sm shadow-sm ${sizeClasses[size]} ${variationClasses[variation]} ${className} transition`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
