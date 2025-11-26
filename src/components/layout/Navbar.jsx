import NavList from "./NavList";
import { useSelector } from "react-redux";

import Modal from "../../ui/Modal";
import AuthUI from "../auth/AuthUI";

import NotificationsIcon from "../../ui/NotificationsIcon";
import Cart from "../../ui/Cart";
import Avatar from "../../ui/Avatar";

import { useState } from "react";
import { Menu, User } from "lucide-react";
import SideNav from "../navigation/SideNav";
import SearchBar from "../../ui/SearchBar";
import { PressmartLogo2 } from "../../ui/Logo";
import { Link } from "react-router-dom";


function Navbar() {
  const cart = useSelector((state) => state.cart.cart);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between bg-slate-100 px-6 py-2 shadow-sm">
      <div className="navbar-start">
        <div className="">
          <button
            onClick={() => setIsNavOpen(true)}
            className="btn btn-ghost btn-circle border-0 md:hidden"
          >
            <Menu />
          </button>

          <Link to="/" className="hidden md:flex">
            <PressmartLogo2 />
          </Link>

          {/* Mobile Nav Overlay */}
          {isNavOpen && <NavItems isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />}
        </div>
      </div>

      <>
        <SearchBar />

        <NavDetails cart={cart} />
      </>
    </div>
  );
}
export default Navbar;

export function NavItems({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all"
        onClick={onClose}
      />

      <div className="animate-slide-in fixed top-0 left-0 z-50 h-full w-[80%] max-w-[320px] bg-white shadow-lg md:w-80">
        <SideNav onClose={onClose} />
      </div>
    </>
  );
}

export function NavDetails({ cart }) {
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
              <button className="text-md hidden gap-1 rounded-lg bg-green-500 px-3 py-0.5 text-slate-50 hover:bg-green-600 md:flex">
                <User size={17} />
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
        <AuthUI />
      </Modal.Window>
    </Modal>
  );
}
