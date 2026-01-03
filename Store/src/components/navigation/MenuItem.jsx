import { useNavigate, useLocation } from "react-router-dom";

function MenuItem({ icon, label, cart, to, onClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const active = to && location.pathname === to;

  function handleClick() {
    if (to) navigate(to);
    if (onClick) onClick();
  }

  return (
    <div
      onClick={handleClick}
      className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 transition-colors ${active ? "bg-green-50 text-green-700" : "text-gray-700 hover:bg-gray-50"
        }`}
    >
      <span className={active ? "text-green-600" : "text-gray-500"}>{icon}</span>
      <span className="flex-1 font-medium">{label}</span>

      {cart && (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          {cart.length}
        </span>
      )}
    </div>
  );
}

export default MenuItem;
