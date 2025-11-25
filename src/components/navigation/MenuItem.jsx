import { Link } from "react-router-dom";

function MenuItem({ icon, label, active, badge, to, onClick }) {
  const content = (
    <div
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
        active ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-50"
      }`}
      onClick={onClick} // now works
    >
      <span className={active ? "text-green-600" : "text-gray-500"}>{icon}</span>
      <span className="flex-1 text-left font-medium">{label}</span>
      {badge && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {badge}
        </span>
      )}
    </div>
  );

  // Wrap with Link if `to` is provided
  return to ? <Link to={to}>{content}</Link> : content;
}

export default MenuItem;
