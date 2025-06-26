import { Button, Input, Progress } from "antd";
import IconSearch from "@/assets/icons/icon-search.svg?react";
import UserImg from "@/assets/img/user.png";
import { useMemo, useState } from "react";
import clsx from "clsx";
import Compair from "./compair-users";
import { Modal } from "antd";
import {useNotificationContext} from "@/context/notification";

function LeftBar() {
  const [value, setValue] = useState(99);
  const [open, setOpen] = useState(false);
  const {notify} = useNotificationContext();
  const progressColor = useMemo(() => {
    return value > 80 ? "#4DD282" : value > 30 ? "#ff4e4e" : "exception";
  }, [value]);
  return (
    <div className="col-span-2 border bg-white border-secondary-default rounded-2xl p-6">
      <div>
        <h1 className="text-2xl font-bold">База данных похожих людей</h1>
        <p className="text-base text-light-100 mt-2">
          Найдите в базе наиболее похожего человека, сравните фото и прикрепите
          его ID.
        </p>
      </div>
      <div className="my-4">
        <Input
          className="custom-input w-full"
          placeholder="Поиск по идентификатору системы г."
          prefix={<IconSearch className="fill-none" />}
          size="large"
        />
      </div>
      <div className="flex flex-col gap-4">
        {/**border-light-green-50 */}
        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className={clsx(
              "border border-secondary-default flex justify-between items-stretch gap-3 shadow-sm rounded-lg p-4",
              index === 0 &&
                "border-light-green-50 shadow-custom shadow-light-green-50"
            )}>
            <div className="flex items-start gap-6">
              <div className="bg-light-50 max-w-[120px] max-h-[120px] w-full h-full p-4 rounded-lg">
                <img
                  src={UserImg}
                  alt="img"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold lg:text-lg">
                  Нурматова Азиза Шерзодовна
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-base text-light-100">
                    Гражданство:
                    <span className="text-base-900 font-medium">
                      Узбекистан
                    </span>
                  </p>
                  <p className="text-base text-light-100">
                    Серия и номер паспорта:
                    <span className="text-base-900 font-medium">AD2383823</span>
                  </p>
                  <p className="text-base text-light-100">
                    Дата рождения:
                    <span className="text-base-900 font-medium">
                      31.12.1980
                    </span>
                  </p>
                  <p className="text-base text-light-100">
                    Национальность:
                    <span className="text-base-900 font-medium">Узбечка</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-light-300/10 p-4 rounded-md flex-1 flex flex-col justify-between gap-1 max-w-[500px]">
              <div className="flex items-center gap-3">
                <div className="w-full h-full max-w-[60px] max-h-[60px]">
                  <Progress
                    strokeWidth={10}
                    percent={value}
                    size={60}
                    strokeColor={progressColor}
                    type="circle"
                  />
                </div>
                <p className="text-sm text-base-900">
                  Процент сходства фотографии из заявки с базой данных
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button onClick={()=>setOpen(true)} className="border border-primary bg-white text-primary">
                  Сравнить
                </Button>
                <Button onClick={() => notify({
                  type: "success",
                  message: "ID успешно прикреплен",
                  description: "ID успешно прикреплен",
                  duration: 4
                })} className="bg-primary text-white">Прикрепить ID</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        title="Сравнение анкет иммигрантов"
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        open={open}
        onCancel={() => setOpen(false)}
        width={"fit-content"}>
        <Compair />
      </Modal>
    </div>
  );
}

export default LeftBar;
