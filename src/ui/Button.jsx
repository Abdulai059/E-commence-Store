function Button({ size = "medium", variation = "primary", children, ...props }) {
  // Size classes
  const sizeClasses = {
    small: "text-[1.2rem] px-2 py-1 uppercase font-semibold text-center",
    medium: "text-[1.4rem] px-4 py-3 font-medium",
    large: "text-[1.6rem] px-6 py-3 font-medium",
    largebtn: "text-[1.6rem] px-6 py-3 font-medium w-full my-3",
  };

  // Variation classes
  const variationClasses = {
    primary: "text-white bg-blue-600 hover:bg-blue-700",
    secondary: "text-gray-600 bg-gray-100 border border-gray-200 hover:bg-gray-50",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
  };

  return (
    <button
      className={`rounded-sm shadow-sm ${sizeClasses[size]} ${variationClasses[variation]} transition`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
