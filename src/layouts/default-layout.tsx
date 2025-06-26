import React from "react";
import AsideBar from "@/components/layout/sidebar/";
import Navbar from "@/components/layout/navbar";
interface IProps {
  children: React.ReactNode;
}
function DefaultLayout({ children }: IProps) {
  return (
    <div className="w-full flex h-[100dvh] overflow-hidden">
      <AsideBar />
      <div className="flex-1 flex flex-col h-full">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-light-50 p-5">
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
