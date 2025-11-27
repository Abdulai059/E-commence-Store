function Button({
  size = "medium",
  variation = "primary",
  children,
  icon = null,
  className = "",
  ...props
}) {
  const sizeClasses = {
    small: "text-[1.2rem] px-2 py-1 uppercase font-semibold text-center",
    medium: "text-base px-4 py-2.5 rounded-md font-medium",
    large: "text-[1.6rem] px-6 py-3 font-medium",
    largebtn: "text-[1.6rem] px-6 py-3 font-medium w-full my-3",
    basebtn: "rounded-full px-2.5 py-1 md:px-3.2 md:py-1.7 text-sm",
    searchmediun: "h-9 w-32 rounded-full",
  };

  const variationClasses = {
    primary:
      "bg-gradient-to-r from-red-400 to-red-500 text-white shadow-md transition-all hover:from-red-500 hover:to-red-600",
    secondary: "text-gray-600 bg-gray-100 border border-gray-200 hover:bg-gray-50",
    danger: "text-red-100 bg-red-700 hover:bg-red-800",
    round:
      "inline-block text-sm rounded-full bg-red-400 font-semibold uppercase tracking-wide text-stone-100 transition-colors duration-300 hover:bg-red-300 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed",
    search: "bg-gradient-to-r from-red-400 to-red-500 text-sm text-white",
    success:
      "w-full rounded-md bg-gradient-to-r from-green-400 to-teal-500 py-2.5 font-semibold text-white transition-all hover:from-green-500 hover:to-teal-600",
  };

  return (
    <button
      className={`${sizeClasses[size]} ${variationClasses[variation]} ${className} flex items-center justify-center gap-2 shadow-sm transition`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </button>
  );
}

export default Button;
