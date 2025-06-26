import UserImg from "@/assets/img/user.png";
import { Divider } from "antd";


function RightBar() {
  return (
    <div className="col-span-1 sticky top-0 border bg-white border-secondary-default rounded-2xl p-6">
      <div className="flex items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="bg-light-50 max-w-[160px] max-h-[160px] w-full h-full p-4 rounded-lg">
            <img
              src={UserImg}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Рахимова Азиза Икрамовна</h1>
            <p className="text-primary-light">rahimova_a@gmail.com</p>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <h3>Паспортные данные</h3>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <p>Серия и номер паспорта</p>
            <span>AD2430483</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Гражданство</p>
            <span>Узбекистан</span>
          </div>
          <div className="flex justify-between items-center">
            <p>ПИНФЛ</p>
            <span>31210202029182</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Дата рождения</p>
            <span>31.12.1980</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Пол</p>
            <span>Женский</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Национальность</p>
            <span>Узбечка</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Место рождения</p>
            <span>Ташкент</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Место выдачи</p>
            <span>IIV 26291</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Дата выдачи</p>
            <span>12.10.2020</span>
          </div>
          <div className="flex justify-between items-center">
            <p>Дата истечения срока действия</p>
            <span>12.10.2030</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
