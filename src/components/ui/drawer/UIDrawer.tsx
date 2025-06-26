interface IAddProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
  title?: string;
  showBg?: boolean;
}
import { Drawer } from "antd";
import IconClose from "@/assets/icons/icon-close.svg?react";
import UIButton from "@/components/ui/button/UIButton";
import clsx from "clsx";
function Add({
  open,
  setOpen,
  children,
  title = "Добавить",
  showBg = true,
}: IAddProps) {
  return (
    <>
      <Drawer
        className={clsx("custom-driwer")}
        styles={{
          mask: {
            display: showBg ? "block" : "none",
          },
        }}
        closable={false}
        title={false}
        onClose={() => setOpen(false)}
        open={open}>
        <div className="flex flex-col h-full">
          <div className="py-3 px-5 flex items-center justify-between gap-2 border-b border-base-300">
            <h1 className="text-xl font-semibold text-base-500">{title}</h1>
            <UIButton
              onClick={() => setOpen(false)}
              className="!p-2 !border-none hover:bg-base-200">
              <IconClose />
            </UIButton>
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </Drawer>
    </>
  );
}

export default Add;
