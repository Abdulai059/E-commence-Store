import { User } from "lucide-react";
import NavList from "./NavList";
import NotificationsIcon from "../../ui/NotificationsIcon";
import Cart from "../../ui/Cart";
import Avatar from "../../ui/Avatar";
import AuthUi from "../auth/AuthUi";
import Modal from "../../ui/Modal";
import { useUser } from "../auth/useUser";


function NavDetails({ cart }) {
  const { user, isLoading } = useUser();
  return (
    <Modal>
      <div className="navbar-end flex items-center gap-3">
        <NavList />

        {/* {isLoading && <div className="text-sm">Loading...</div>} */}

        {/* NOT LOGGED IN layout */}
        {!isLoading && !user && (
          <>
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
        {!isLoading && user && (
          <>
            <Avatar />
            <NotificationsIcon />
            <Cart cart={cart} />
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
