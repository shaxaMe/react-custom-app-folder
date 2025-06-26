import { Form, DatePicker, Select, Button, message } from "antd";
import type { FormProps } from "antd";
import dayjs from "dayjs";
import { ConfigProvider } from "antd";
// import localeRu from "antd/locale/ru_RU";
import localeUZ from "antd/locale/uz_UZ";
import "dayjs/locale/uz";
import IconCalendar from "@/assets/icons/icon-calendar.svg?react";
import { useEffect } from "react";
import { iFilters, FormValuesWithDate, IFilterProps } from "../types";

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

export default function RussianForm({
  setOpen,
  setFilters,
  initialValues,
}: IFilterProps) {
  const [form] = Form.useForm<FormValuesWithDate>();

  const onFinish: FormProps<FormValuesWithDate>["onFinish"] = (values) => {
    const formattedValues: iFilters = {
      ...values,
      birthDate: values.birthDate
        ? values.birthDate.format("DD.MM.YYYY")
        : null,
    };

    if (setFilters) {
      setFilters((prev: iFilters) => {
        return {
          ...prev,
          ...formattedValues,
        };
      });
    }

    message.success("Форма успешно отправлена!");
    setOpen(false);
  };

  const onFinishFailed: FormProps<FormValuesWithDate>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    message.error("Пожалуйста, заполните все обязательные поля");
  };
  function cancelSaves() {
    form.resetFields();
    setOpen(false);
  }

  useEffect(() => {
    if (initialValues) {
      const formValues: FormValuesWithDate = {
        ...initialValues,
        birthDate: initialValues.birthDate
          ? dayjs(initialValues.birthDate, "DD.MM.YYYY")
          : null,
      };
      form.setFieldsValue(formValues);
    }
  }, [initialValues, form]);

  return (
    <ConfigProvider locale={localeUZ}>
      <div className="min-w-[400px] flex h-full">
        <div className="w-full h-full flex">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="h-full flex-1"
            size="large">
            <div className="flex flex-col h-full justify-between">
              <div className="py-3 px-5 h-full flex-1">
                <Form.Item
                  label="Дата рождения"
                  name="birthDate"
                  rules={[
                    { required: false, message: "Выберите дату рождения" },
                  ]}>
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
                  label="Страна рождения"
                  name="country"
                  rules={[
                    { required: false, message: "Выберите страну рождения" },
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
                  name="nationality"
                  rules={[
                    { required: false, message: "Выберите город рождения" },
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
                    Сохранить
                  </Button>
                </div>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
}
