import React from "react";
import { Pagination } from "antd";
import UiButton from "@/components/ui/button/UIButton";
import IconArrowLeft from "@/assets/icons/icon-arrow-left.svg?react";
import IconArrowRight from "@/assets/icons/icon-arrow-right.svg?react";
import clsx from "clsx";

interface PaginationComponentProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  isFullWidth?: boolean;
  isCentered?: boolean;
  isIcon?: boolean;
  isShowIcons?: boolean;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  currentPage,
  setCurrentPage,
  isFullWidth = false,
  isCentered = false,
  isShowIcons = true
}) => {
  const pageSize = 10;
  const totalItems = 500;
  const totalPages = Math.ceil(totalItems / pageSize);

  const itemRender = (
    _: any,
    type: string,
    originalElement: React.ReactNode
  ) => {
    if (type === "prev") {
      return <UiButton className="!px-3 !py-2 flex hover:scale-105 disabled:opacity-50 transition-all duration-300 ease-linear font-bold text-sm items-center gap-1" disabled={currentPage === 1}>{isShowIcons&&<IconArrowLeft className="w-3 h-3" />} {!!isShowIcons?"Предыдущий":'Пред'} </UiButton>;
    }
    if (type === "next") {
      return <UiButton className="!px-3 !py-2 flex font-bold disabled:opacity-50 hover:scale-105 text-sm transition-all duration-300 ease-linear items-center gap-1" disabled={currentPage === totalPages}> {!!isShowIcons?"Следующий":'След'} {isShowIcons&&<IconArrowRight className="w-3 h-3" />}</UiButton>;
    }
    return originalElement;
  };

  return (
    <Pagination className={clsx(
      'w-full',
      isFullWidth ? "w-full" : "",
      isCentered ? "flex justify-center" : ""
    )}
      current={currentPage}
      onChange={setCurrentPage}
      pageSize={pageSize}
      showSizeChanger={false}
      total={totalItems}
      itemRender={itemRender}
    />
  );
};

export default PaginationComponent;
