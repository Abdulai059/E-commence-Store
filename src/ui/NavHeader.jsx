import Topbar from "./Topbar";
import Navbar from "../components/layout/Navbar";

function Header() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <Topbar />
      <Navbar />
    </div>
  );
}

export default Header;
