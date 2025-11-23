import Button from "./Button";

export default function ProductActionButton({
  icon: Icon,
  bgColor = "white",
  textColor = "black",
  hoverColor = "blue",
  size = 18,
  label,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium opacity-0 transition-all duration-300 cursor-pointer group-hover:translate-y-0 group-hover:opacity-100"
      style={{ backgroundColor: bgColor, color: textColor }}
      title={label}
    >
      <Icon
        size={size}
        style={{ color: textColor, transition: "color 0.2s ease" }}
        onMouseEnter={(e) => (e.target.style.color = hoverColor)}
        onMouseLeave={(e) => (e.target.style.color = textColor)}
      />
    </button>
  );
}
