import User1 from "@/assets/img/user1.png";
import User2 from "@/assets/img/user2.png";
import { Divider, Progress, Button, Modal } from "antd";
import { useMemo, useState } from "react";
import CompairFinger from "./compair-finger";
function Compair() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(99);
  const progressColor = useMemo(() => {
    return value > 80 ? "#4DD282" : value > 30 ? "#ff4e4e" : "exception";
  }, [value]);
  return (
    <div className="w-full bg-white p-4 flex items-start gap-6">
      <div className="flex flex-col flex-1 justify-end">
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 border border-secondary-default bg-light-200 col-start-2 rounded-t-lg">
            Анкета с заявки
          </div>
          <div className="py-3 px-4 border border-secondary-default bg-light-200 col-start-3 rounded-t-lg">
            Анкета с базы данных
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default rounded-tl-lg">
            Фамилия
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Рахимова
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Нурматова
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Имя
          </div>
          <div className="py-3 px-4 border border-secondary-default">Азиза</div>
          <div className="py-3 px-4 border border-secondary-default">Азиза</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Отчество
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Икрамовна
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Шерзодовна
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Серия и номер паспорта
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            AD2430483
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            AD2940483
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Гражданство
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Узбекистан
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Узбекистан
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Дата рождения
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            31.12.1980
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            31.12.1980
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Пол
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Женский
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Женский
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Национальность
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Узбечка
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Узбечка
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Место рождения
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Ташкент
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            Ташкент
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Место выдачи
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            IIV 26291
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            IIV 26291
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default">
            Дата выдачи
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            12.10.2020
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            13.10.2020
          </div>
        </div>
        <div className="grid grid-cols-3">
          <div className="py-3 px-4 bg-light-200 border border-secondary-default rounded-bl-lg">
            Срок действия
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            12.10.2030
          </div>
          <div className="py-3 px-4 border border-secondary-default">
            13.10.2030
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-[420px]">
        <div className="flex items-center gap-4">
          <div className="flex text-center flex-col gap-3">
            <div>
              <img src={User1} alt="User1" />
            </div>
            <p className="text-sm">Фото с заявки</p>
          </div>
          <div className="flex text-center flex-col gap-3">
            <div>
              <img src={User2} alt="User1" />
            </div>
            <p className="text-sm">Фото с базы данных</p>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-4">
          <div className="bg-light-200 p-4 rounded-lg flex items-center gap-3">
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
              Процент сходства фотографии из заявки с базой данных
            </p>
          </div>
          <div className="bg-light-200 p-4 rounded-lg flex items-center gap-3">
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
        <div className="flex flex-col gap-4 mt-4">
          <Button
            onClick={() => setOpen(true)}
            className="border-primary text-primary"
            size="large">
            Сравнить отпечатки
          </Button>
          <Button
            size="large"
            type="primary"
            className="bg-primary hover:!bg-primary-dark">
            Прикрепить ID
          </Button>
        </div>
      </div>
      <Modal
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        open={open}
        onCancel={() => setOpen(false)}
        width={"fit-content"}
        title="Сравнение отпечатков пальцев">
        <CompairFinger />
      </Modal>
    </div>
  );
}

export default Compair;
