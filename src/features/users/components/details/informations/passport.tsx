import { Button } from "antd";
import { useState } from "react";
import PlusSign from "@/assets/icons/plus-sign.svg?react";
import IconEdit from "@/assets/icons/icon-edit.svg?react";
import UiDrawer from "@/components/ui/drawer/UIDrawer";
import AddPassport from "../../forms/add-passport";
interface IPassport {
  title: string;
  value: string;
  key: string;
}
function PassportInformation() {
  const userDetail: IPassport[] = [
    {
      title: "Ф.И.О",
      value: "АЗИМОВА САМИЯ ФАХРИДДИНОВНА",
      key: "name",
    },
    {
      title: "Дата рождения",
      value: "01.01.1990",
      key: "birthDate",
    },
    {
      title: "Пол",
      value: "Женский",
      key: "gender",
    },
    {
      title: "Страна рождения",
      value: "Российская Федерация",
      key: "country",
    },
    {
      title: "Дата внесения изменений",
      value: "12.12.2025",
      key: "changeDate",
    },
  ];
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Паспортные данные</h1>
          <Button
            onClick={() => setOpen(true)}
            className="!bg-blue-500 group text-white hover:!text-white flex items-center shadow-sm">
            <PlusSign className="w-4 h-4" />
            Добавить
          </Button>
        </div>
        <div className="w-full flex flex-col gap-6 mt-4">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="bg-secondary-light border border-base-800 px-5 py-4 rounded-xl flex items-stretch gap-4">
              <div className="user-image w-[120px] min-h-[160px] h-auto overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                {userDetail.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-start gap-2">
                    <p className="text-base-400 text-sm">{item.title}</p>
                    <p className="text-base-500 text-sm font-semibold">
                      {item.value}
                    </p>
                  </div>
                ))}
                {/* <div className="flex flex-col justify-start gap-2">
                <p className="text-base-400 text-sm">Ф.И.О</p>
                <p className="text-base-500 text-sm font-semibold">
                  АЗИМОВА САМИЯ ФАХРИДДИНОВНА
                </p>
              </div> */}
              </div>
              <div className="bg-white h-[40px] flex items-center justify-center cursor-pointer w-[40px] px-3 py-2  rounded-lg border border-base-600">
                <IconEdit className="text-base-500 fill-none w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
        <UiDrawer open={open} setOpen={setOpen} title="Добавить паспорт">
          <AddPassport setOpen={setOpen} />
        </UiDrawer>
      </div>
    </>
  );
}

export default PassportInformation;