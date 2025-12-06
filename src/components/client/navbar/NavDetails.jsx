import { User } from "lucide-react";
import NavList from "./NavList";
import NotificationsIcon from "../../../ui/NotificationsIcon";
import Cart from "../../../ui/Cart";
import Avatar from "../../../ui/Avatar";
import AuthUi from "../auth/AuthUi";
import { useState } from "react";
import Modal from "../../../ui/Modal";

function NavDetails({ cart }) {
  const [user, setUser] = useState(null);

  return (
    <Modal>
      <div className="navbar-end flex items-center gap-3">
        <NavList />

        {/* NOT LOGGED IN layout */}
        {!user && (
          <>
            {/* Button that OPENS the modal */}
            <Modal.Open opens="login">
              <button className="hidden items-center gap-2 rounded-lg bg-green-500 px-4 py-1.5 text-sm font-medium text-slate-50 transition-colors hover:bg-green-600 md:flex">
                <User size={18} />
                <span>Login</span>
              </button>
            </Modal.Open>

            <NotificationsIcon />
            <Cart cart={cart} />
          </>
        )}

        {/* LOGGED IN layout */}
        {user && (
          <>
            <NotificationsIcon />
            <Cart cart={cart} />
            <Avatar />
          </>
        )}
      </div>

      <Modal.Window name="login">
        <AuthUi />
      </Modal.Window>
    </Modal>
  );
}
export default NavDetails;
