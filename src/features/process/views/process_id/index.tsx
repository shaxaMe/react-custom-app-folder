import IconLeft from "@/assets/icons/icon-left.svg?react";
import RightBar from "../../components/right-bar";
import LeftBar from "../../components/left-bar";
import UIButton from "@/components/ui/button/UIButton";
function ProcessId() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-start">
        <UIButton onClick={() => window.history.back()} className="!p-1 border-none text-sm !bg-transparent">
          <IconLeft className="text-blue-500 fill-none" /> Назад
        </UIButton>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <LeftBar />
        <RightBar />
      </div>
    </div>
  );
}

export default ProcessId;