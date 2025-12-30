import { useNavigate } from "react-router-dom";
import { useLogout } from "../components/auth/useLogout";
import { useUser } from "../components/auth/useUser";

function Avatar() {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();
  const { logout } = useLogout();

  // Do NOT render Avatar if user is gone
  if (!user) return null;

  const { fullName, avatar } = user.user_metadata || {};

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar transition-transform hover:scale-105"
      >
        <div className="relative w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {avatar ? (
            <img
              src={avatar}
              alt={`Avatar of ${fullName}`}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="skeleton h-10 w-10 rounded-full bg-blue-200 dark:bg-blue-700"></div>
          )}
        </div>
      </div>

      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-lg bg-slate-50 p-6 shadow-lg"
      >
        <li>
          <a className="justify-between !text-base ">
            Profile
            <span className="badge rounded-md bg-green-600 p-1 text-slate-100 !text-sm">
              New
            </span>
          </a>
        </li>

        <li>
          <button
            onClick={() => navigate("/settings")}
            className="w-full text-left !text-base"
          >
            Settings
          </button>
        </li>

        <li>
          <button
            onClick={() => logout()}
            disabled={isLoading}
            className="w-full text-left !text-base  text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </li>
      </ul>

    </div>
  );
}

export default Avatar;
