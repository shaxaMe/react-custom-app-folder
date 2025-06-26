import { useState } from "react";
import DynamicBreadcrumb from "@/components/ui/breadcrumb/dynamic-breadcrumb";
import IconBell from "@/assets/icons/icon-bell.svg?react";
import Avatar from "@/assets/img/avatar.png";
import IconDown from "@/assets/icons/icon-down.svg?react";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Badge, Divider } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useNotificationContext } from "@/context/notification";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const { notify } = useNotificationContext();

  const handleLogout = () => {
    logout();
    notify({
      type: "success",
      message: "Logged out successfully",
      description: "You have been logged out of your account.",
      duration: 3,
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "2",
      label: <Link to={"/profile"}>Profile</Link>,
      extra: "⌘P",
    },
    {
      key: "3",
      label: "Billing",
      extra: "⌘B",
    },
    {
      key: "4",
      label: "Settings",
      icon: <SettingOutlined />,
      extra: "⌘S",
    },
    {
      type: "divider",
    },
    {
      key: "5",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
      danger: true,
    },
  ];

  return (
    <div className="min-h-[50px] border border-b py-4 px-6">
      <div className="w-full  flex justify-between items-center gap-3">
        <div className="flex items-center justify-between">
          <DynamicBreadcrumb />
        </div>

        <div className="flex items-stretch gap-5">
          <Dropdown
            trigger={["hover"]}
            placement="bottom"
            popupRender={() => (
              <div className="w-64 bg-white rounded shadow-lg p-4 flex flex-col justify-center items-center text-center">
                <h4 className="font-semibold mb-2">Notifications</h4>
                <p className="text-gray-500 text-sm">No new notifications</p>
              </div>
            )}>
            <div className="relative cursor-pointer">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden border border-base-800 flex justify-center items-center">
                <IconBell />
              </div>
              <Badge
                size="small"
                className="absolute z-10 -top-1 right-0"
                count={5}></Badge>
            </div>
          </Dropdown>
          <Divider type="vertical" className="h-auto" />
          <Dropdown
            menu={{ items }}
            open={open}
            onOpenChange={(flag) => setOpen(flag)}>
            <div
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                <img
                  src={Avatar}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>{user.name || "User"}</p>
              <IconDown
                className={clsx(
                  "transition-transform duration-300",
                  open && "rotate-180"
                )}
              />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
