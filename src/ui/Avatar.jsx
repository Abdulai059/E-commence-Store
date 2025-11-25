function Avatar() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar transition-transform hover:scale-105"
      >
        <div className="ring-primary w-10 rounded-full ring-2">
          <img
            alt="User avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-lg bg-slate-50 p-2 shadow-lg"
      >
        <li>
          <a className="justify-between">
            Profile<span className="badge rounded-md bg-green-600 p-1 text-slate-100">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default Avatar;
