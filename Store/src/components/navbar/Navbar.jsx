import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu } from "lucide-react";

import SearchBar from "../../ui/SearchBar";
import PressmartLogo from "../../ui/Logo";
import NavItems from "./NavItems";
import NavDetails from "./NavDetails";

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
            <PressmartLogo size="large" variant="red" />
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
