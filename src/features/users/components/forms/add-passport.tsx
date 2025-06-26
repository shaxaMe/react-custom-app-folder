import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  message,
  Row,
  Col,
} from "antd";
import type { FormProps } from "antd";
import dayjs from "dayjs";
import { ConfigProvider } from "antd";
import localeUZ from "antd/locale/uz_UZ";
import "dayjs/locale/uz";
import IconCalendar from "@/assets/icons/icon-calendar.svg?react";
import MaskedInput from "@/components/ui/MaskedInput";
import { useEffect, useRef, useState } from "react";
import { IPassportForm, IAddPassportProps } from "../../types";

const { TextArea } = Input;
const { Option } = Select;
dayjs.locale("uz");

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

function AddPassport({ setOpen, initialValues }: IAddPassportProps) {
  const [form] = Form.useForm<IPassportForm>();
  const passport_number = useRef<HTMLInputElement>(null);
  const [passportSerial, setPassportSerial] = useState<string | null>("");
  const onFinish: FormProps<IPassportForm>["onFinish"] = (values) => {
    console.log("Form values:", values);
    message.success(
      initialValues ? "Данные успешно обновлены!" : "Форма успешно отправлена!"
    );
    setOpen(false);
  };
  const onValuesChange = (changedValues: any) => {
    if (changedValues.passport_serial !== undefined) {
      setPassportSerial(changedValues.passport_serial);
    }
  };

  const onFinishFailed: FormProps<IPassportForm>["onFinishFailed"] = (
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
    if (passportSerial && passportSerial.length === 2) {
      passport_number.current?.focus();
    }
  }, [passportSerial]);
  return (
    <ConfigProvider locale={localeUZ}>
      <div className="min-w-[500px] flex flex-col h-full">
        <div className="w-full h-full flex flex-col">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onValuesChange={onValuesChange}
            size="large">
            <div className="py-3 px-5 flex flex-col h-full">
              <Form.Item
                label="Ф.И.О"
                name="fullname"
                rules={[
                  { required: true, message: "Выберите город рождения" },
                ]}>
                <Input placeholder="Введите Ф.И.О" className="custom-input" />
              </Form.Item>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label="Паспорт серия"
                    name="passport_serial"
                    rules={[
                      {
                        required: true,
                        message: "Введите паспортные данные",
                        min: 2,
                        max: 2,
                      },
                    ]}>
                    <MaskedInput
                      placeholder="AC"
                      maxLength={2}
                      className="uppercase"
                      mask="AA"
                    />
                  </Form.Item>
                </Col>

                <Col span={16}>
                  <Form.Item
                    label="Номер паспорта"
                    name="passport_number"
                    rules={[
                      {
                        required: true,
                        message: "Введите номер паспорта",
                        min: 7,
                        max: 7,
                      },
                    ]}>
                    <MaskedInput
                      inputRef={passport_number}
                      placeholder="1234567"
                      mask="9999999"
                    />
                  </Form.Item>
                </Col>
              </Row>
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
                  {nationalities.map((country) => (
                    <Option key={country} value={country}>
                      {country}
                    </Option>
                  ))}
                </Select>
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
              <Form.Item label="Особые отметки" name="special_notes">
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

export default AddPassport;
