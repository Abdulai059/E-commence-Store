import { Outlet } from "react-router-dom";
import Header from "../../ui/NavHeader";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="z-0 pt-18 md:pt-0">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
