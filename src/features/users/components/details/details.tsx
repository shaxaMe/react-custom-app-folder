//assets
import IconVerifiedTick from "@/assets/icons/icon-verified-tick.svg?react";
import BasicInformation from "./informations/basic";

//imports
import { useState } from "react";
import PassportInformation from "./informations/passport";
import VisaRequests from "./informations/visa-requests";
import RegistrationDetails from "./informations/registration-details";
//components
import { Segmented } from "antd";
import type { TDetailActions, DetailOptions } from "../../types";

const options: DetailOptions = [
  { label: "Основная инфо.", value: "basic" },
  { label: "Паспортные данные", value: "passport" },
  { label: "Визовые запросы", value: "visaRequests" },
  { label: "Визы", value: "visas" },
  { label: "Сведения о регистрации", value: "registration" },
  { label: "Овир", value: "ovir" },
];

function Detail() {
  const [activeTab, setActiveTab] = useState<TDetailActions>("basic");
  return (
    <div className="w-[60dvw] max-w-[800px] py-3 px-5">
      <div className="flex items-center gap-4">
        <div className="p-1 rounded-full relative flex justify-center items-center border border-base-400/50">
          <div className="w-[88px] h-[88px] rounded-full overflow-hidden border-2 border-base-300 relative">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <IconVerifiedTick className="absolute bottom-2 right-1 w-6 h-6" />
        </div>
        <div>
          <p className="text-base-500 text-xl font-semibold">
            АЗИМОВА САМИЯ ФАХРИДДИНОВНА
          </p>
          <p className="text-base-400 text-base">ID 157899511</p>
        </div>
      </div>
      <div className="pt-6 pb-4 border-b border-b-base-300">
        <Segmented
          className="custom-segment"
          defaultValue={activeTab}
          options={options}
          onChange={(value: TDetailActions) => {
            setActiveTab(value);
          }}
        />
      </div>
      <div className="pt-4">
        {
          {
            basic: <BasicInformation />,
            passport: <PassportInformation />,
            visaRequests: <VisaRequests />,
            registration: <RegistrationDetails />,
            visas: <VisaRequests />,
            ovir: <VisaRequests />,
          }[activeTab]
        }
      </div>
    </div>
  );
}

export default Detail;
