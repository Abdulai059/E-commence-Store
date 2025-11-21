import { Outlet } from "react-router-dom";
import Header from "../../ui/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <div className="pt-[80px] md:pt-[220px]  sm:pt-0 md:pt-0 z-0">
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
