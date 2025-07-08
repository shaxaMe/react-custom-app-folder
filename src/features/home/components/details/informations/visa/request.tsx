const requestData: {
    id: number;
    title: string;
    key: string;
    value: string;
  }[] = [
    {
      id: 1,
      title: "Регистрационный номер",
      value: "12575811",
      key: "registration_number",
    },
    {
      id: 2,
      title: "Системный идентификатор",
      value: "1575",
      key: "system_identifier",
    },
    {
      id: 3,
      title: "Организация (ведемоства), отправившая запрос",
      value: "Министерство иностранных дел",
      key: "organization_department",
    },
    {
      id: 4,
      title: "Запрашиваемый тип визы",
      value: "А-1",
      key: "visa_type",
    },
    {
      id: 5,
      title: "Запрашиваемая кратность визы",
      value: "2 кратная до 1 года 2",
      key: "visa_number",
    },
    {
      id: 6,
      title: "Дата обращения за визовой поддержкой",
      value: "06.08.2021",
      key: "visa_support",
    },
    {
      id: 7,
      title: "Запрашивающий срок пребывания с даты",
      value: "20.08.2021",
      key: "visa_date",
    },
    {
      id: 8,
      title: "Запрашивающий срок пребывания до даты",
      value: "20.08.2021",
      key: "visa_date_end",
    },
    {
      id: 9,
      title: "Запрашивающий срок пребывания в днях",
      value: "20.08.2021",
      key: "visa_date_days",
    },
    {
      id: 10,
      title: "Страна оказания визовой поддержки",
      value: "Пакистан",
      key: "country",
    },
    {
      id: 11,
      title: "Ф.И.О, принявшего запрос",
      value: "Азимова Самия Фахриддиновна",
      key: "full_name",
    },
    {
      id: 12,
      title: "Запрашивающий  организаци",
      value: "КО МИД РУ Урганч",
      key: "organization",
    },
    {
      id: 13,
      title: "Запрашивающий  объект",
      value: "Запрашивающий  объект",
      key: "object",
    },
    {
      id: 14,
      title: "Запрашивающий организация",
      value: "Запрашивающий организация",
      key: "organization",
    },
    {
      id: 15,
      title: "Ответственный за прием",
      value: "Хоразм",
      key: "responsible",
    },
    {
      id: 16,
      title: "Состояние визового запроса",
      value: "Подтвержден (а)",
      key: "status",
    },
    {
      id: 17,
      title: "Особые отметки",
      value: "Состояние визового запроса",
      key: "special_notes",
    },
    {
      id: 18,
      title: "Дополнительные сведения",
      value: "STUDY STUDENT OF THE URGANCH BRANCH",
      key: "additional_information",
    },
    {
      id: 19,
      title: "Дата поступления запроса в СНБ",
      value: "07.08.2021",
      key: "date_created",
    },
    {
      id: 20,
      title: "Пользователь, отправивший информацию в СНБ",
      value: "RSHUXRAT",
      key: "created_by",
    },
    {
      id: 21,
      title: "Дата обработки запроса",
      value: "12.12.2025 г.",
      key: "date_updated",
    },
    {
      id: 22,
      title: "Пользователь, обработавший запрос",
      value: "Фазилов Хислат Музаффарович",
      key: "updated_by",
    },
    {
      id: 23,
      title: "Дата принятия, окончательного решения по запросу",
      value: "Дата принятия, окончательного решения по запросу",
      key: "date_closed",
    },
    {
      id: 24,
      title: "Пользователь, принявший окончательное решения",
      value: "Касимов Мумин Тохирович",
      key: "closed_by",
    },
  ];
function Request() {
    return (
      <div>
        <h1 className="text-xl font-semibold">ID15748512</h1>
        <div className="mt-4 grid grid-cols-2 gap-6">
          {requestData.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-1">
              <p className="text-base-400 text-base">{item.title}</p>
              <p className="text-base-500 text-base font-semibold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default Request