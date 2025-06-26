import { Button, Collapse, Flex, Typography } from "antd";
import { useState } from "react";
import SideBarLeft from "@/assets/icons/sidebar-left.svg?react";
import Logo from "@/assets/icons/logo.svg?react";
import LogoFull from "@/assets/icons/logo-full.svg?react";
import sidebarElements from "./sidebarElements";
import LogoMVD from "@/assets/img/logo-nvd.png";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Flex
      className={`p-[12px] border-r border-solid border-[#E9E9E9] h-[100vh] flex-col justify-between bg-white ${twMerge(
        "transition-all duration-300",
        collapsed ? "w-[60px]" : "w-[220px]"
      )}`}>
      <Flex vertical>
        <Flex className="items-center justify-between w-full mb-[24px]">
          {collapsed ? <Logo onClick={toggleCollapsed} /> : <LogoFull />}
          {collapsed ? (
            ""
          ) : (
            <Button type="link" onClick={toggleCollapsed}>
              <SideBarLeft />
            </Button>
          )}
        </Flex>
        <div className="overflow-y-scroll h-[calc(100vh-200px)] scroll-none scroll-smooth">
          <Flex vertical gap={8}>
            {sidebarElements?.map((item, index) => (
              <div key={index}>
                {item.link ? (
                  <Link
                    to={item.link}
                    type="link"
                    className={`w-full flex items-center justify-start gap-[8px] group-hover:bg-[#2563EB] text-[#69757A] text-[14px] font-[500] leading-[18px] hover:text-[#2563EB] p-[10px] h-auto ${twMerge(
                      collapsed ? "p-0 !gap-0 justify-center" : ""
                    )}`}>
                    {item?.icon}
                    {collapsed ? "" : item.title}
                  </Link>
                ) : (
                  <Collapse
                    expandIconPosition="end"
                    ghost
                    items={[
                      {
                        key: "1",
                        label: (
                          <div className="flex -translate-x-1.5 group-hover:bg-[#2563EB] bg-transparent items-center transition-all gap-x-2 text-[#232E40] font-medium text-[14px]">
                            {item?.icon}
                            {collapsed ? "" : item.title}
                          </div>
                        ),
                        showArrow: true,
                        children: item.children?.map((kog) => (
                          <Link
                            key={kog.link}
                            to={kog.link}
                            className="w-full flex -translate-x-1.5 items-center gap-y-2 text-[#69757A] text-[14px] font-medium leading-[18px] hover:bg-[#F5F7FA]  hover:text-[#171429] p-2 rounded-md">
                            <span className="whitespace-nowrap h-[20px] bg-transparent group-hover:bg-[#2563EB] transition-all">
                              {kog.title}
                            </span>
                          </Link>
                        )),
                      },
                    ]}
                  />
                )}
              </div>
            ))}
          </Flex>
        </div>
      </Flex>

      <Flex>
        <Button className="w-full border border-[#E9E9E9] rounded-[8px] overflow-hidden p-[8px] h-auto flex items-center justify-start gap-[8px]">
          <img className="w-8 h-8 object-contain" src={LogoMVD} alt="LogoMVD" />
          <Flex vertical className="items-start">
            <Typography className="text-[#171429] text-[14px] font-[600] leading-[18px]">
              ОВИР МВД
            </Typography>
            <Typography className="text-[#69757A] text-[12px] font-[400] leading-[15px]">
              Название роли
            </Typography>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
}
