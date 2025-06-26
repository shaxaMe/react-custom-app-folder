import Navbar from "@/components/layout/navbar";
import AsideBar from "@/components/layout/sidebar";
import { Link, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div className="w-full flex h-[100dvh] overflow-hidden">
      <AsideBar />
      <div className="flex-1 flex flex-col h-full">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-light-50 p-5">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileLayout;
