import SideBarLeft from "@/assets/icons/sidebar-left.svg?react";
import Logo from "@/assets/icons/logo.svg?react";
import LogoFull from "@/assets/icons/logo-full.svg?react";
import ChartRing from "@/assets/icons/chart-ring.svg?react";
import LogoMVD from "@/assets/img/logo-nvd.png";
import UserAccount from "@/assets/icons/user-account.svg?react";
import { useEffect, useState } from "react";
import { Button, Flex, Layout, Menu, Typography, Tag } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import clsx from "clsx";
import { paths } from "@/config/path/path";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function AsideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const selectedKeys = [location.pathname];

  const items: MenuItem[] = [
    {
      key: "/",
      icon: <ChartRing />,
      label: <div className="flex flex-1 justify-between items-center">Главная <Tag className="h-fit p-1 border bg-primary-100/10 border-primary-100 text-primary-100 rounded-lg">99+</Tag>
</div>,
    },
    {
      key: "/users-items",
      icon: <UserAccount />,
      label: "Личност",
      children: [
        {
          key: paths.dashboard.users.getHref(),
          label: "Список иммигрантов",
        },
        {
          key: paths.dashboard.process.getHref(),
          label: "Обработать",
        },
        {
          key: paths.dashboard.visa.getHref(),
          label: "Визы",
        },
      ],
    },
  ];

  useEffect(() => {
    if (!collapsed) {
      const parentKey = getParentKey(location.pathname);
      if (parentKey) {
        setOpenKeys([parentKey]);
      } else {
        setOpenKeys([]);
      }
    }
  }, [location.pathname, collapsed]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    setOpenKeys(keys);
  };

  function getParentKey(pathname: string): string | undefined {
    for (const item of items) {
      if (item && "children" in item) {
        const children = (item as { children: MenuItem[] }).children;
        for (const child of children) {
          if (child?.key === pathname) {
            return item.key as string;
          }
        }
      }
    }
    return undefined;
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="bg-white min-h-dvh">
      <div className="flex flex-col gap-6 justify-between h-full">
        {/* Logo va toggle */}
        <div className="flex flex-col gap-6">
          <div
            className={`flex items-center justify-between gap-2 ${
              collapsed ? "!justify-center" : ""
            }`}>
            <div
              className={`flex items-start justify-start ${
                collapsed ? "items-center justify-center" : ""
              }`}>
              {collapsed ? (
                <Logo
                  onClick={() => setCollapsed(!collapsed)}
                  className="w-[32px] h-[32px] cursor-pointer"
                />
              ) : (
                <LogoFull className="w-fit h-8" />
              )}
            </div>
            {!collapsed && (
              <SideBarLeft
                onClick={() => setCollapsed(!collapsed)}
                className="min-w-6 h-6 cursor-pointer"
              />
            )}
          </div>

          {/* MENU */}
          <Menu
            mode="inline"
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
            onClick={({ key }) => {
              navigate(key); // ⬅️ redirect qilish uchun ishlaydi
            }}
          />
        </div>

        {/* Footer - rol haqida */}
        <Button
          className={clsx(
            "w-full border border-[#E9E9E9] rounded-[8px] overflow-hidden p-[8px] h-auto flex items-center gap-[8px]",
            collapsed ? "justify-center" : "justify-start"
          )}>
          <img className="w-8 h-8 object-contain" src={LogoMVD} alt="LogoMVD" />
          {!collapsed && (
            <Flex vertical className="items-start">
              <Typography className="text-[#171429] text-[14px] font-[600] leading-[18px]">
                ОВИР МВД
              </Typography>
              <Typography className="text-[#69757A] text-[12px] font-[400] leading-[15px]">
                Название роли
              </Typography>
            </Flex>
          )}
        </Button>
      </div>
    </Sider>
  );
}

export default AsideBar;
