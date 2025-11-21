import { Outlet } from "react-router-dom";
import Header from "../../ui/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="pt-18 md:pt-0 z-0">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
