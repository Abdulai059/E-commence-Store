import { ShoppingCart, Zap } from "lucide-react";

export default function PressmartLogo({ size = "large" }) {
  const sizes = {
    small: {
      container: "text-xl",
      icon: 20,
      padding: "p-1",
    },
    medium: {
      container: "text-2xl",
      icon: 20,
      padding: "p-1.5",
    },
    large: {
      container: "text-3xl",
      icon: 24,
      padding: "p-3",
    },
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-2">
      <div
        className={`${currentSize.padding} rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-sm`}
      >
        <ShoppingCart size={currentSize.icon} className="fill-white text-white" />
      </div>

      <div className={`text-2xl leading-none font-bold`}>
        <span className="text-green-600">Press</span>
        <span className="text-slate-100">mart.</span>
      </div>
    </div>
  );
}

// Alternative versions you can use:

export function PressmartLogo2({ size = "medium" }) {
  const sizes = {
    small: {
      container: "text-xl",
      icon: 16,
      padding: "p-1",
    },
    medium: {
      container: "text-xl",
      icon: 24,
      padding: "p-1.5",
    },
    large: {
      container: "text-3xl",
      icon: 24,
      padding: "p-2",
    },
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-2">
      {/* Icon with gradient background */}
      <div
        className={`${currentSize.padding} rounded-lg bg-gradient-to-br from-red-500 to-red-600 shadow-sm`}
      >
        <ShoppingCart size={currentSize.icon} className="fill-white text-white" />
      </div>

      {/* Logo Text */}
      <div className={`font-medium ${currentSize.container} leading-none`}>
        <span className="text-gray-800">Press</span>
        <span className="text-red-600">mart</span>
      </div>
    </div>
  );
}
