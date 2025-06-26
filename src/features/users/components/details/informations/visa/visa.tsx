const visaData: {
  id: number;
  title: string;
  key: string;
  value: string;
}[] = [
  {
    id: 1,
    title: "Системный идентификатор выезда",
    value: "KAZ-INT-00003456",
    key: "system_identifier",
  },
  {
    id: 2,
    title: "Дата и время фиксации выезда",
    value: "2025-04-29 14:32:17",
    key: "date_time",
  },
  {
    id: 3,
    title: "Ф.И.О",
    value: "Азимова Самия Фахриддиновна",
    key: "full_name",
  },
  {
    id: 4,
    title: "Гражданство",
    value: "Узбекистан",
    key: "citizenship",
  },
  {
    id: 5,
    title: "Паспорт",
    value: "АВ 1257789",
    key: "passport",
  },
  {
    id: 6,
    title: "Дата окончания паспорта",
    value: "12.12.2025",
    key: "passport_date",
  },
  {
    id: 7,
    title: "Дата рождения",
    value: "12.12.2000",
    key: "date_of_birth",
  },
  {
    id: 8,
    title: "Пол",
    value: "Женский",
    key: "gender",
  },
  {
    id: 9,
    title: "Пункт выезда",
    value: "Международный аэропорт Ташкент имени Ислама Каримова",
    key: "airport",
  },
  {
    id: 10,
    title: "Номер визы",
    value: "2025-VZ-7864321",
    key: "visa_number",
  },
  {
    id: 11,
    title: "Цель поездки",
    value: "Деловая поездка",
    key: "purpose",
  },
  {
    id: 12,
    title: "Страна, куда идет выезд",
    value: "Республика Казахстан",
    key: "country",
  },
  {
    id: 13,
    title: "Способ пересечения границы",
    value: "Автомобиль (личный транспорт)",
    key: "crossing_method",
  },
  {
    id: 14,
    title: "№ транспортного средства",
    value: "А123КХ77",
    key: "transport_number",
  },
  {
    id: 15,
    title: "Допольнительные сведения о транспорте",
    value: "Toyota Camry",
    key: "transport_information",
  },
  {
    id: 16,
    title: "Зафиксированное нарушение",
    value: "Несоответствие документов",
    key: "fixed_violation",
  },
  {
    id: 17,
    title: "Допольнительные сведения",
    value: "А123КХ77",
    key: "additional_information",
  },
  {
    id: 18,
    title: "Пользователь, зафиксировавший въезд на погранпосте",
    value: "Иванов Сергей Петрович",
    key: "fixed_by",
  },
  {
    id: 19,
    title: "Пользователь, отправивший запрос на въезд вышестоящему",
    value: "Иванов Сергей Петрович",
    key: "created_by",
  },
  {
    id: 20,
    title: "Дата и время отправки запроса вышестоящему",
    value: "2025-04-29 16:00:00",
    key: "date_created",
  },
  {
    id: 21,
    title: "Дата и время получения ответа на запрос от вышестоящего",
    value: "2025-04-29 17:15:00",
    key: "date_updated",
  },
  {
    id: 22,
    title: "Дата и время отправки запроса вышестоящему",
    value: "2025-04-29 16:00:00",
    key: "date_closed",
  },
  {
    id: 23,
    title: "Решение вышестоящего",
    value: "Утверждение запроса на продление визы",
    key: "decision",
  },
  {
    id: 24,
    title: "Пользователь, принявший решение",
    value: "Иванов Сергей Петрович",
    key: "closed_by",
  },
  {
    id: 25,
    title: "Информация от ошибках",
    value: "Несоответствие данных в паспорте и визе",
    key: "error_information",
  },
];
function Visa() {
  return (
      <div className="grid grid-cols-2 gap-6">
        {visaData.map((item, index) => (
          <div key={index} className="flex flex-col items-start gap-1">
            <p className="text-base-400 text-base">{item.title}</p>
            <p className="text-base-500 text-base font-semibold">
              {item.value}
            </p>
          </div>
        ))}
      </div>
  );
}

export default Visa;
