import { Button, Input } from "antd";
import IconMsWord from "@/assets/icons/icon-msword.svg?react";
import { SearchOutlined } from "@ant-design/icons";

const registrationData: {
  id: number;
  title: string;
  key: string;
  value: string;
}[] = [
  {
    id: 1,
    title: "Системный идентификатор",
    value: "KAZ-INT-00003456",
    key: "system_identifier",
  },
  {
    id: 2,
    title: "Уникальный идентификаторв системе Emehmon",
    value: "EM-2039482",
    key: "unique_identifier",
  },
  {
    id: 3,
    title: "Гостиница",
    value: "Hyatt Regency Tashkent",
    key: "hotel",
  },
  {
    id: 4,
    title: "Регион в системе E-mehmon",
    value: "Ташкентская область",
    key: "region",
  },
  {
    id: 5,
    title: "Регистрационный номер листка прибытия в системе Emehmon",
    value: "EM-PB-20250428-001",
    key: "registration_number",
  },
  {
    id: 6,
    title: "Ф.И.О гостя",
    value: "Иванов Сергей Петрович",
    key: "full_name",
  },
  {
    id: 7,
    title: "Дата рождения",
    value: "12.12.2000",
    key: "date_of_birth",
  },
  {
    id: 8,
    title: "Гражданство гостя",
    value: "Республика Казахстан",
    key: "citizenship",
  },
  {
    id: 9,
    title: "Страна рождения гостя",
    value: "Республика Казахстан",
    key: "country_of_birth",
  },
  {
    id: 10,
    title: "Страна откуда прибыл гость",
    value: "Республика Казахстан",
    key: "country_of_arrival",
  },
  {
    id: 11,
    title: "Номера гостиницы",
    value: "№57",
    key: "hotel_number",
  },
  {
    id: 12,
    title: "Пол",
    value: "Женский",
    key: "gender",
  },
  {
    id: 13,
    title: "Дата заселения гостя",
    value: "12.12.2025 г.",
    key: "date_of_arrival",
  },
  {
    id: 14,
    title: "Дата выселения гостя",
    value: "12.12.2025 г.",
    key: "date_of_departure",
  },
  {
    id: 15,
    title: "Тип визита гостя",
    value: "Образовательный",
    key: "visit_type",
  },
  {
    id: 16,
    title: "Тип документа",
    value: "Свидетельство о рождении",
    key: "document_type",
  },
  {
    id: 17,
    title: "Паспорт (Серия и номер)",
    value: "АВ123КХ77",
    key: "passport",
  },
  {
    id: 18,
    title: "Дата выдача паспорта",
    value: "12.12.2025 г.",
    key: "date_of_issue",
  },
  {
    id: 19,
    title: "Выдавший орган",
    value: "Государственная миграционная служба",
    key: "issuing_authority",
  },
  {
    id: 20,
    title: "Тип визы",
    value: "Туристическая виза",
    key: "visa_type",
  },
  {
    id: 21,
    title: "Номер визы",
    value: "123456789",
    key: "visa_number",
  },
  {
    id: 22,
    title: "Срок визы с",
    value: "12.12.2025 г.",
    key: "visa_period_from",
  },
  {
    id: 23,
    title: "Срок визы по",
    value: "12.12.2025 г.",
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
function RegistrationDetails() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Сведения о регистрации (Гостиницы)
        </h1>
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
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-6">
          {registrationData.map((item, index) => (
            <div key={index} className="flex flex-col items-start gap-1">
              <p className="text-base-400 text-base">{item.title}</p>
              <p className="text-base-500 text-base font-semibold">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegistrationDetails;
