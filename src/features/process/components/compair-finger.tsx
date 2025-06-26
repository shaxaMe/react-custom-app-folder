import { useMemo, useState } from "react";
import HandLeft from "@/assets/img/hand-left.png";
import HandRight from "@/assets/img/hand-right.png";
import FingerRight from "@/assets/img/finger-right.png";
import FingerLeft from "@/assets/img/finger.png";
import { Progress } from "antd";
function Compair() {
  const [value, setValue] = useState(99);
  const progressColor = useMemo(() => {
    return value > 80 ? "#4DD282" : value > 30 ? "#ff4e4e" : "exception";
  }, [value]);
  return (
    <div className="w-full bg-white p-4 flex items-start flex-col gap-6">
      <div className="flex flex-col flex-1 justify-end">
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 border border-secondary-default bg-light-200 col-start-2 rounded-t-lg">
            Левая рука
          </div>
          <div className="py-3 px-4 border border-secondary-default bg-light-200 col-start-3 rounded-t-lg">
            Правая рука
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 flex items-center justify-center bg-light-200 border border-secondary-default rounded-tl-lg">
            Фото с заявки
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            <div className="w-full h-full min-w-[200px] min-h-[200px] p-2">
              <img
                className="w-full h-full object-contain"
                src={FingerLeft}
                alt="finger-left"
              />
            </div>
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            <div className="w-full h-full min-w-[200px] min-h-[200px] p-2">
              <img
                className="w-full h-full object-contain"
                src={FingerRight}
                alt="FingerRight"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 flex items-center justify-center bg-light-200 border border-secondary-default">
            Фото с базы данных
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            <div className="w-full h-full min-w-[200px] min-h-[200px] p-2">
              <img
                className="w-full h-full object-contain"
                src={HandLeft}
                alt="HandLeft"
              />
            </div>
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            <div className="w-full h-full min-w-[200px] min-h-[200px] p-2">
              <img
                className="w-full h-full object-contain"
                src={HandRight}
                alt="HandRight"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 px-4 border border-secondary-default bg-light-200 w-full flex items-center gap-3 rounded-t-lg">
        <div className="w-full h-full max-w-[60px] max-h-[60px]">
          <Progress
            strokeWidth={10}
            percent={value}
            size={60}
            strokeColor={progressColor}
            type="circle"
          />
        </div>
        <p className="text-base">
          Процент сходства отпечатков пальцев из заявки с базой данных
        </p>
      </div>
    </div>
  );
}

export default Compair;
