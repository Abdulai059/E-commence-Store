export default function ProductActionButton({
  icon: Icon,
  bgColor = "white",
  textColor = "black",
  size = 18,
  label,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 rounded-full px-2 py-2 text-sm font-medium opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-slate-800 hover:text-white"
      style={{ backgroundColor: bgColor, color: textColor }}
      title={label}
    >
      <Icon size={size} />
    </div>
  );
}
