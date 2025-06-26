import { Form, Input, DatePicker, Select, Button, message } from "antd";
import type { FormProps } from "antd";
import dayjs from "dayjs";
import { ConfigProvider } from "antd";
import localeUZ from "antd/locale/uz_UZ";
import "dayjs/locale/uz";
import IconCalendar from "@/assets/icons/icon-calendar.svg?react";
import { useEffect } from "react";
import { FormValues, IUserAddProps } from "../../types/index";

const { TextArea } = Input;
const { Option } = Select;
dayjs.locale("uz");

const countries = [
  "Россия",
  "Украина",
  "Беларусь",
  "Казахстан",
  "США",
  "Германия",
  "Франция",
  "Великобритания",
];

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Нижний Новгород",
  "Челябинск",
  "Самара",
];

const nationalities = [
  "Русский",
  "Украинец",
  "Белорус",
  "Татарин",
  "Казах",
  "Армянин",
  "Азербайджанец",
  "Грузин",
];

const genders = [
  { value: "male", label: "Мужской" },
  { value: "female", label: "Женский" },
];

const ghostControlOptions = ["Текст", "Опция 1", "Опция 2", "Опция 3"];

export default function UserAdd({ setOpen, initialValues }: IUserAddProps) {
  const [form] = Form.useForm<FormValues>();

  useEffect(() => {
    if (initialValues) {
      const formValues = {
        ...initialValues,
        birthDate:
          typeof initialValues.birthDate === "string"
            ? dayjs(initialValues.birthDate, "DD.MM.YYYY")
            : initialValues.birthDate,
        passportExpiry: initialValues.passportExpiry || undefined,
      };
      form.setFieldsValue(formValues);
    }
  }, [initialValues, form]);

  const onFinish: FormProps<FormValues>["onFinish"] = (values) => {
    console.log("Form values:", values);
    message.success(
      initialValues ? "Данные успешно обновлены!" : "Форма успешно отправлена!"
    );
    setOpen(false);
  };

  const onFinishFailed: FormProps<FormValues>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    message.error("Пожалуйста, заполните все обязательные поля");
  };
  function cancelSaves() {
    form.resetFields();
    setOpen(false);
  }

  const validatePassport = (_: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error("Введите паспортные данные"));
    }
    if (value.length < 6) {
      return Promise.reject(
        new Error("Паспортные данные должны содержать минимум 6 символов")
      );
    }
    return Promise.resolve();
  };

  const validateFullName = (_: any, value: string) => {
    if (!value) {
      return Promise.reject(new Error("Введите Ф.И.О"));
    }
    const nameParts = value.trim().split(" ");
    if (nameParts.length < 2) {
      return Promise.reject(
        new Error("Введите полное Ф.И.О (минимум имя и фамилия)")
      );
    }
    return Promise.resolve();
  };

  return (
    <ConfigProvider locale={localeUZ}>
      <div className="min-h-screen min-w-[400px]">
        <div className="w-full">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            size="large">
            <div className="py-3 px-5">
              <Form.Item
                label="Ф.И.О"
                name="fullName"
                rules={[{ validator: validateFullName }]}>
                <Input placeholder="Введите Ф.И.О" className="custom-input" />
              </Form.Item>

              <Form.Item
                label="Дата рождения"
                name="birthDate"
                rules={[{ required: true, message: "Выберите дату рождения" }]}>
                <DatePicker
                  placeholder="ДД.ММ.ГГГГ"
                  format="DD.MM.YYYY"
                  suffixIcon={false}
                  prefix={<IconCalendar />}
                  className="custom-input"
                  disabledDate={(current) =>
                    current && current > dayjs().endOf("day")
                  }
                />
              </Form.Item>

              <Form.Item
                label="Паспорт"
                name="passport"
                rules={[{ validator: validatePassport }]}>
                <Input
                  placeholder="Введите паспорт данные"
                  className="custom-input"
                />
              </Form.Item>

              <Form.Item
                label="Дата окончания действия паспорта"
                name="passportExpiry"
                rules={[
                  {
                    required: true,
                    message: "Выберите дату окончания действия паспорта",
                  },
                ]}>
                <DatePicker
                  placeholder="ДД.ММ.ГГГГ"
                  format="DD.MM.YYYY"
                  suffixIcon={false}
                  prefix={<IconCalendar className="fill-white" />}
                  className="custom-input"
                  disabledDate={(current) =>
                    current && current < dayjs().endOf("day")
                  }
                />
              </Form.Item>

              <Form.Item
                label="Страна рождения"
                name="birthCountry"
                rules={[
                  { required: true, message: "Выберите страну рождения" },
                ]}>
                <Select
                  placeholder="Выберите страну"
                  className="custom-input"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.children as unknown as string)
                      ?.toLowerCase()
                      .includes(input.toLowerCase())
                  }>
                  {countries.map((country) => (
                    <Option key={country} value={country}>
                      {country}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Город рождения"
                name="birthCity"
                rules={[
                  { required: true, message: "Выберите город рождения" },
                ]}>
                <Select
                  placeholder="Выберите город"
                  className="custom-input"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.children as unknown as string)
                      ?.toLowerCase()
                      .includes(input.toLowerCase())
                  }>
                  {cities.map((city) => (
                    <Option key={city} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Национальность"
                name="nationality"
                rules={[
                  { required: true, message: "Выберите национальность" },
                ]}>
                <Select
                  placeholder="Выберите национальность"
                  className="custom-input"
                  showSearch
                  filterOption={(input, option) =>
                    (option?.children as unknown as string)
                      ?.toLowerCase()
                      .includes(input.toLowerCase())
                  }>
                  {nationalities.map((nationality) => (
                    <Option key={nationality} value={nationality}>
                      {nationality}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Пол"
                name="gender"
                rules={[{ required: true, message: "Выберите пол" }]}>
                <Select placeholder="Выберите пол" className="custom-input">
                  {genders.map((gender) => (
                    <Option key={gender.value} value={gender.value}>
                      {gender.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Призрак контрольность"
                name="ghostControl"
                rules={[{ required: true, message: "Выберите опцию" }]}>
                <Select placeholder="Текст" className="rounded-lg">
                  {ghostControlOptions.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Особые отметки"
                name="specialNotes"
                rules={[
                  { required: true, message: "Напишите об особых отметках" },
                ]}>
                <TextArea
                  placeholder="Напишите об особых отметках"
                  rows={4}
                  className="custom-input"
                  maxLength={500}
                  showCount
                />
              </Form.Item>
            </div>
            <Form.Item className="mb-0 w-full border-t border-base-300">
              <div className="flex items-center justify-between gap-4 py-3 px-5">
                <Button
                  type="default"
                  size="large"
                  className="flex-1"
                  onClick={() => cancelSaves()}>
                  Отменить
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="bg-blue-600 flex-1 hover:bg-blue-700">
                  Добавить
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
}
