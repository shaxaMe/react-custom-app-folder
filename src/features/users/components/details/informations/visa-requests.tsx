import {Button, Input, Segmented} from "antd";
import { useState } from "react";
import IconMsWord from "@/assets/icons/icon-msword.svg?react";
import { SearchOutlined } from "@ant-design/icons";
import Request from "./visa/request"
import Visa from "./visa/visa";
import Entrances from "./visa/entrances";
import Trips from "./visa/trips";
function VisaRequests() {
  type TVisaReq = "request" | "visa" | "entrances" | "trips";

  const options: { label: string; value: TVisaReq }[] = [
    {
      label: "Визовые запросы",
      value: "request",
    },
    {
      label: "Визы",
      value: "visa",
    },
    {
      label: "Въезды",
      value: "entrances",
    },
    {
      label: "Выезды",
      value: "trips",
    },
  ];
  const [activeTab, setActiveTab] = useState<TVisaReq>("request");
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Визовые запросы</h1>
          <div className="flex items-center gap-4">
            <Input
              className="custom-input min-w-[300px]"
              placeholder="Поиск по идентификатору системы г."
              prefix={<SearchOutlined />}
              size="large"
            />
            <Button size="large" className="rounded-lg px-3 py-2 font-semibold">
              <IconMsWord /> Скачать
            </Button>
          </div>
        </div>
        <div className="pt-4 w-full pb-6 border-b border-b-base-300">
          <Segmented
            className="custom-segment diveder-full"
            defaultValue={activeTab}
            options={options}
            onChange={(value: TVisaReq) => {
              setActiveTab(value);
            }}
          />
        </div>
        <div className="mt-4">
          {
            {
              request: <Request />,
              visa: <Visa />,
              entrances: <Entrances />,
              trips: <Trips />,
            }[activeTab]
          }
        </div>
      </div>
    </>
  );
}

export default VisaRequests;