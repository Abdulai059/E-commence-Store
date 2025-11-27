import classNames from "classnames";
import { ShoppingCart } from "lucide-react";

function PressmartLogo({ size = "large", variant = "green", classNames = "" }) {
  const sizes = {
    small: { container: "text-xl", icon: 20, padding: "p-1" },
    medium: { container: "text-2xl", icon: 20, padding: "p-1.5" },
    large: { container: "text-xl", icon: 22, padding: "p-3" },
    xlarge: { container: "text-2xl", icon: 30, padding: "p-2" },
  };

  const currentSize = sizes[size];

  const variants = {
    green: {
      bg: "bg-gradient-to-br from-green-500 to-green-600",
      text1: "text-green-600",
      text2: "text-slate-100",
    },
    red: {
      bg: "bg-gradient-to-br from-red-500 to-red-600",
      text1: "text-gray-800",
      text2: "text-red-600",
    },
  };

  const currentVariant = variants[variant];

  return (
    <div className="flex items-center gap-2">
      <div className={`${currentSize.padding} rounded-lg ${currentVariant.bg} shadow-sm`}>
        <ShoppingCart size={currentSize.icon} className="fill-white text-white" />
      </div>
      <div className={`font-medium ${currentSize.container} leading-none`}>
        <span className={currentVariant.text1}>Press</span>
        <span className={currentVariant.text2}>mart</span>
      </div>
    </div>
  );
}

export default PressmartLogo;
