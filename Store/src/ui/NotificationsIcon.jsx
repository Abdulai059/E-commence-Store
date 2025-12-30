import { Bell } from "lucide-react";

function NotificationsIcon() {
  return (
    <div className="flex gap-2 border-0">
      <button className="btn btn-ghost btn-circle relative border-0 hover:bg-red-100">
        <div className="indicator">
          <Bell  className="text-red-600"/>

          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  );
}

export default NotificationsIcon;
