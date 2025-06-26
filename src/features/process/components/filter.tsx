import React from "react";
import { Input, Select, Row, Col,Empty } from "antd";
import IconUserSquare from "@/assets/icons/icon-user-square.svg?react";
import IconLocation from "@/assets/icons/icon-location.svg?react";

const { Option } = Select;

interface FiltersProps {
  onFiltersChange?: (filters: {
    lastName?: string;
    firstName?: string;
    middleName?: string;
    citizenship?: string;
  }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFiltersChange }) => {
  const [filters, setFilters] = React.useState({
    lastName: "",
    firstName: "",
    middleName: "",
    citizenship: "",
  });

  const handleInputChange = (field: string, value: string) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const countries = [
    "Россия",
    "США",
    "Германия",
    "Франция",
    "Великобритания",
    "Китай",
    "Япония",
    "Канада",
    "Австралия",
    "Бразилия",
  ];

  return (
    <div className="filters-container">
      <Row gutter={16}>
        <Col xs={24} sm={12} md={6}>
          <div className="filter-field">
            <label className="filter-label">Фамилия гостя</label>
            <Input
              placeholder="Введите данные"
              prefix={<IconUserSquare className="w-4 h-4 text-gray-400" />}
              value={filters.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="filter-input"
            />
          </div>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <div className="filter-field">
            <label className="filter-label">Имя гостя</label>
            <Input
              placeholder="Введите данные"
              prefix={<IconUserSquare className="w-4 h-4 text-gray-400" />}
              value={filters.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="filter-input"
            />
          </div>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <div className="filter-field">
            <label className="filter-label">Отчество гостя</label>
            <Input
              placeholder="Введите данные"
              prefix={<IconUserSquare className="w-4 h-4 text-gray-400" />}
              value={filters.middleName}
              onChange={(e) => handleInputChange("middleName", e.target.value)}
              className="filter-input"
            />
          </div>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <div className="filter-field">
            <label className="filter-label">Гражданство</label>
            <Select
              placeholder="Выберите страну"
              prefix={<IconLocation className="w-4 h-4 text-gray-400" />}
              value={filters.citizenship || undefined}
              onChange={(value) => handleInputChange("citizenship", value)}
              notFoundContent={
                <Empty
                  description="Hech narsa topilmadi"
                />
              }
              className="filter-select w-full"
              showSearch
              filterOption={(input, option) =>
                (option?.children as unknown as string)
                  ?.toLowerCase()
                  ?.includes(input.toLowerCase())
              }>
              {countries.map((country) => (
                <Option key={country} value={country}>
                  {country}
                </Option>
              ))}
            </Select>
          </div>
        </Col>
      </Row>

      <style>{`
        
        .filter-field {
          margin-bottom: 16px;
        }
        
        .filter-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
          font-size: 14px;
        }
        
        .filter-input {
          height: 40px;
        }
        
        .filter-select {
          height: 40px;
        }
        
        .filter-select .ant-select-selector {
          height: 40px !important;
          display: flex;
          align-items: center;
        }
        
        .filter-input .ant-input {
          border: 1px solid #d9d9d9;
          border-radius: 6px;
        }
        
        .filter-select .ant-select-selector {
          border: 1px solid #d9d9d9;
          border-radius: 6px;
        }
        
        .filter-input .ant-input:focus,
        .filter-input .ant-input-focused {
          border-color: #1890ff;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        }
        
        .filter-select.ant-select-focused .ant-select-selector {
          border-color: #1890ff;
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Filters;
