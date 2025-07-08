import type React from "react";
import { useState } from "react";
import { Table as AntTable, Dropdown, Button, Space, Modal, Image } from "antd";
import type { ImmigrantData } from "@/types/table/table";
import { EyeOutlined } from "@ant-design/icons";
import UserDetail from "../details/details";
import UIDrawer from "@/components/ui/drawer/UIDrawer";
import type { IMigrantTable } from "../../types";
import RuFlag from "../../assets/img/russian.png";

const MoreIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);

const MigrantTable: React.FC<IMigrantTable> = ({
  tableData,
  setSelectedUser,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const handleEdit = (record: ImmigrantData) => {
    setSelectedUser(record);
  };

  const handleViewDetails = (record: ImmigrantData) => {
    setOpen(true);
  };

  const handleDelete = (record: ImmigrantData) => {
    console.log("Удалить:", record);
  };

  const getMenuItems = (record: ImmigrantData) => [
    {
      key: "edit",
      label: (
        <Space>
          <EditIcon />
          Редактировать
        </Space>
      ),
      onClick: () => handleEdit(record),
    },
    {
      key: "delete",
      label: (
        <Space style={{ color: "#ff4d4f" }}>
          <DeleteIcon />
          Удалить
        </Space>
      ),
      onClick: () => handleDelete(record),
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Ф.И.О",
      dataIndex: "fullName",
      key: "fullName",
      width: 250,
      // render: (text: string, record: ImmigrantData) => (
      //   <div
      //     onClick={() => handleViewDetails(record)}
      //     className="text-sm underline cursor-pointer hover:text-primary">
      //     {text}
      //   </div>
      // ),
      render: (_: string, record: ImmigrantData) => (
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
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="TableImg"
              className="w-full h-full custom-image object-cover"
            />
          </div>
          <p className="text-base-500 text-sm font-medium">{record.fullName}</p>
        </div>
      ),
    },
    {
      title: "Дата рождения",
      dataIndex: "birthDate",
      key: "birthDate",
      width: 130,
    },
    {
      title: "Гражданоство",
      dataIndex: "birthCountry",
      key: "birthCountry",
      width: 180,
      render: (text: string, record: ImmigrantData) => (
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <img src={RuFlag} className="w-full h-full object-cover" alt="RuFlag" />
          </div>
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Пришедшая страна",
      dataIndex: "birthCity",
      key: "birthCity",
      width: 150,
      render: (text: string, record: ImmigrantData) => (
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <img src={RuFlag} className="w-full h-full object-cover" alt="RuFlag" />
          </div>
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "",
      key: "actions",
      width: 50,
      render: (_: any, record: ImmigrantData) => (
        <Dropdown
          menu={{ items: getMenuItems(record) }}
          trigger={["click"]}
          placement="bottomRight">
          <Button
            type="text"
            style={{
              border: "none",
              boxShadow: "none",
              padding: "4px 8px",
            }}>
            <MoreIcon />
          </Button>
        </Dropdown>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      console.log("selectedRowKeys changed: ", newSelectedRowKeys);
      setSelectedRowKeys(newSelectedRowKeys);
    },
    onSelect: (
      record: ImmigrantData,
      selected: boolean,
      selectedRows: ImmigrantData[]
    ) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (
      selected: boolean,
      selectedRows: ImmigrantData[],
      changeRows: ImmigrantData[]
    ) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <div>
      <div className="px-6 py-5">
        <h2 className="font-semibold text-xl">Список иммигрантов</h2>
      </div>
      <AntTable
        columns={columns}
        dataSource={tableData.map((item, index) => ({
          ...item,
          key: index + 1,
        }))}
        rowSelection={rowSelection}
        pagination={false}
        size="middle"
        style={{
          backgroundColor: "white",
          borderRadius: "0px",
        }}
      />
      <Modal
        // showBg={false}
        open={open}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        centered
        className="w-full min-w-fit h-fit"
        onCancel={() => setOpen(false)}
        title="Данные иммигранта">
        <div className="w-full min-w-fit h-fit">
          <UserDetail />
        </div>
      </Modal>
    </div>
  );
};

export default MigrantTable;
