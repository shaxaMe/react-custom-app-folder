//assets
import IconSort from "@/assets/icons/icon-sort.svg?react";
import { useState } from "react";
import { Table, Button, Space, Typography, Image } from "antd";
import { EyeOutlined, PlusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import UIpagination from "@/components/ui/pagination/UIpagination";
const { Text } = Typography;
import { Link } from "react-router-dom";
import { paths } from "@/config/path/path";

interface Person {
  key: string;
  id: number;
  name: string;
  citizenship: string;
  organization: string;
  avatarUrl: string;
}

const data: Person[] = [
  {
    key: "1",
    id: 1,
    name: "Рахимова Азиза Икрамовна",
    citizenship: "Узбекистан",
    organization: "КОГТ",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "2",
    id: 2,
    name: "Юлдашева Махлиё Шавкатовна",
    citizenship: "Россия",
    organization: "Посольство",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "3",
    id: 3,
    name: "Каримов Фаррух Абдурасулович",
    citizenship: "Финляндия",
    organization: "Посольство",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "4",
    id: 4,
    name: "Саидова Дилноза Бахтиёровна",
    citizenship: "Польша",
    organization: "КОГТ",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "5",
    id: 5,
    name: "Тошпулатов Жасур Камолович",
    citizenship: "Узбекистан",
    organization: "Посольство",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "6",
    id: 6,
    name: "Нурматова Азиза Шерзодовна",
    citizenship: "Узбекистан",
    organization: "Посольство",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "7",
    id: 7,
    name: "Усманов Шохрух Абдугафарович",
    citizenship: "Россия",
    organization: "КОГТ",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "8",
    id: 8,
    name: "Рахимова Мехрибон Содиковна",
    citizenship: "Финляндия",
    organization: "Посольство",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "9",
    id: 9,
    name: "Ходжаев Достонбек Музаффарович",
    citizenship: "Польша",
    organization: "КОГТ",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    key: "10",
    id: 10,
    name: "Ибрагимова Зухра Фархадовна",
    citizenship: "Узбекистан",
    organization: "Посольство",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
];

export default function PeopleTable() {
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Person | null;
    direction: "asc" | "desc" | null;
  }>({ key: null, direction: null });

  const columns: ColumnsType<Person> = [
    {
      title: "№",
      dataIndex: "id",
      key: "id",
      width: 60,
      render: (id: number) => <Text strong>{id}</Text>,
    },
    {
      title: (
        <div className="flex items-center justify-between gap-2">
          <p>Фамилия, Имя, Отчество</p>
          <IconSort
            className={`w-4 h-4 cursor-pointer ${
              sortConfig.key === "name" ? "fill-primary" : ""
            }`}
            onClick={() => {
              handleHeaderClick("name");
            }}
          />
        </div>
      ),
      dataIndex: "name",
      key: "name",
      width: 450,
      //   sorter: (a, b) => a.name.localeCompare(b.name),
      render: (name: string, record: Person) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <Image
              preview={{
                mask: (
                  <span
                    role="img"
                    aria-label="eye"
                    className="anticon anticon-eye">
                    <EyeOutlined />
                  </span>
                ),
              }}
              src={
                "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              }
              alt="TableImg"
              className="w-full h-full custom-image object-cover"
            />
          </div>
          <p className="text-base-500 text-sm font-medium">{name}</p>
        </div>
      ),
    },
    {
      title: "Гражданство",
      dataIndex: "citizenship",
      key: "citizenship",
      width: 450,
    },
    {
      title: "Организация",
      dataIndex: "organization",
      key: "organization",
      width: 450,
    },
    {
      title: "Действия",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Link to={paths.dashboard.process_id.getHref(record.id)}>
            <Button
              type="link"
              icon={<PlusOutlined />}
              style={{ color: "#1890ff" }}>
              Прикрепить ID
            </Button>
          </Link>
        </Space>
      ),
    },
  ];

  function handleHeaderClick(columnName: keyof Person) {
    let direction: "asc" | "desc" = "asc";

    if (sortConfig.key === columnName && sortConfig.direction === "asc") {
      direction = "desc";
    } else if (
      sortConfig.key === columnName &&
      sortConfig.direction === "desc"
    ) {
      setSortConfig({ key: null, direction: null });
      setFilteredData(data);
      return;
    }

    const sortedData = [...filteredData].sort((a, b) => {
      const aValue = a[columnName];
      const bValue = b[columnName];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      if (typeof aValue === "number" && typeof bValue === "number") {
        return direction === "asc" ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

    setFilteredData(sortedData);
    setSortConfig({ key: columnName, direction });
  }

  return (
    <div className="p-6 bg-white rounded-2xl">
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={false}
        scroll={{ x: 800 }}
        size="middle"
        className="custom-striped-table"
        bordered={false}
      />
      <div className="mt-4 flex justify-center w-full">
        <UIpagination
          isFullWidth={false}
          isCentered={true}
          isShowIcons={false}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
