import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to, className = "" }) {
  const navigate = useNavigate();

  const baseClasses = "text-base font-medium text-indigo-500 cursor-pointer hover:text-indigo-600";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (to === "-1") {
    return (
      <button className={combinedClasses} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={combinedClasses}>
      {children}
    </Link>
  );
}

export default LinkButton;
