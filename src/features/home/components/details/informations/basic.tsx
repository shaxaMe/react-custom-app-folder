const basicData = [
  {
    title: "Дата рождения",
    value: "12.12. 2020 г.",
  },
  {
    title: "Пол",
    value: "Женский",
  },
  {
    title: "Страна рождения",
    value: "Российская Федерация",
    img: FlagRussion,
  },
  {
    title: "Дата рождения",
    value: "01.01.1990",
  },
  {
    title: "Страна рождения",
    value: "Россия",
  },
  {
    title: "Город рождения",
    value: "Москва",
  },
  {
    title: "Особые отметки",
    value: "Глаз плохо видит",
  },
  {
    title: "Дата внесения изменений",
    value: "12.12.2025",
  },
];
import FlagRussion from "@/assets/img/flag-russion.png";

function BasicInformation() {
  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">Основная информация</h1>
        <div className="mt-4 grid grid-cols-2 gap-6">
          {basicData.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-1">
              <p className="text-base-400 text-base">{item.title}</p>
              <p className="text-base-500 text-base flex items-center gap-1 font-semibold">
                {item.img && <img src={item.img} alt="" />}
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BasicInformation;