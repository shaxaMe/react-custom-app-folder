"use client"

import type React from "react"
import { useState } from "react"
import { Button, Flex, Table, Tag } from "antd"
import type { TableColumnsType, TableProps } from "antd"

type TableRowSelection<T extends object = object> = TableProps<T>["rowSelection"]

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
  firstName?: string
  lastName?: string
  tags?: string[]
}

interface ITableProps<T extends object = object> {
  dataSource?: T[]
  selectedRowKeys?: React.Key[]
  onChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void
  getCheckboxProps?: (record: T) => { disabled?: boolean; name?: string }
  onSelect?: (record: T, selected: boolean, selectedRows: T[]) => void
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void
  onSelectInvert?: (selectedRowKeys: React.Key[]) => void
  fixed?: boolean | "left" | "right"
  hideSelectAll?: boolean
  columnWidth?: number
  columnTitle?: React.ReactNode
  type?: "checkbox" | "radio"
  preserveSelectedRowKeys?: boolean
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  defaultSelectedRowKeys?: React.Key[]
}

const columns: TableColumnsType<DataType> = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    render: (tags: string[]) => (
      <>
        {tags?.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green"
          if (tag === "loser") {
            color = "volcano"
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
]

const dataSource: DataType[] = Array.from<DataType>({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  firstName: "Edward",
  lastName: `King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
  tags: i % 3 === 0 ? ["developer", "react"] : i % 2 === 0 ? ["designer", "ui"] : ["manager"],
}))

const UITable = <T extends object = DataType>({
  dataSource: propDataSource = dataSource as T[],
  selectedRowKeys: propSelectedRowKeys,
  onChange,
  getCheckboxProps,
  onSelect,
  onSelectAll,
  onSelectInvert,
  fixed,
  hideSelectAll = false,
  columnWidth,
  columnTitle,
  type = "checkbox",
  preserveSelectedRowKeys = false,
  defaultSelectedRowKeys = [],
}: ITableProps<T>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(propSelectedRowKeys || defaultSelectedRowKeys)
  const [loading, setLoading] = useState(false)

  const currentSelectedRowKeys = propSelectedRowKeys || selectedRowKeys

  const start = () => {
    setLoading(true)
    setTimeout(() => {
      const newSelectedRowKeys: React.Key[] = []
      setSelectedRowKeys(newSelectedRowKeys)
      onChange?.(newSelectedRowKeys, [])
      setLoading(false)
    }, 1000)
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[], selectedRows: T[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys)
    if (!propSelectedRowKeys) {
      setSelectedRowKeys(newSelectedRowKeys)
    }
    onChange?.(newSelectedRowKeys, selectedRows)
  }

  const rowSelection: TableRowSelection<T> = {
    selectedRowKeys: currentSelectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps,
    onSelect,
    onSelectAll,
    onSelectInvert,
    fixed,
    hideSelectAll,
    columnWidth,
    columnTitle,
    type,
    preserveSelectedRowKeys,
  }

  const hasSelected = currentSelectedRowKeys.length > 0

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        {hasSelected ? `Selected ${currentSelectedRowKeys.length} items` : null}
      </Flex>
      <Table<T>
        rowSelection={rowSelection}
        columns={columns as TableColumnsType<T>}
        dataSource={propDataSource}
        pagination={false}
      />
    </Flex>
  )
}

export default UITable
