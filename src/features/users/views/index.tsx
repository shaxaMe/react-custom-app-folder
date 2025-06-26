import { useEffect, useMemo, useState } from "react";
//assets
import IconRetry from "@/assets/icons/icon-retry.svg?react";
import PathfinderDivide from "@/assets/icons/pathfinder-divide.svg?react";
import FilterHorizontal from "@/assets/icons/filter-horizontal.svg?react";
import PlusSign from "@/assets/icons/plus-sign.svg?react";
import IconClose from "@/assets/icons/icon-close.svg?react";
import IconCloseOutline from "@/assets/icons/icon-close-outline.svg?react";

//components
import Table from "../components/users-table/table";
import UIpagination from "@/components/ui/pagination/UIpagination";
import UiDrawer from "@/components/ui/drawer/UIDrawer";
import UserAdd from "../components/forms/user-add";
import UserFilter from "../components/filters";
import { Badge, Button } from "antd";

//types
import type { TActions, iFilters } from "../types";
import type { ImmigrantData } from "@/types/table/table";

function Users() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [actions, setActions] = useState<TActions | null>(null);
  const [filters, setFilters] = useState<iFilters>({
    birthDate: null,
    country: "",
    nationality: "",
  });
  const hasValues = useMemo(() => {
    return Object.values(filters).some(
      (value) => value !== null && value !== ""
    );
  }, [filters]);
  const [selectedUser, setSelectedUser] = useState<ImmigrantData | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const data: ImmigrantData[] = [
    {
      id: "1257577",
      fullName: "Иванов Сергей Александрович",
      birthDate: "22.12.2000",
      birthCountry: "Узбекистан",
      birthCity: "Ташкент",
      arrivalCountry: "Узбекистан",
      passport: "AA1234567",
      nationality: "Русский",
      gender: "male",
      ghostControl: "Текст",
      specialNotes: "Особые отметки отсутствуют",
    },
    {
      id: "1257578",
      fullName: "Петрова Мария Викторовна",
      birthDate: "22.12.2000",
      birthCountry: "Российская Федерация",
      birthCity: "Москва",
      arrivalCountry: "Россия",
      passport: "BB1234567",
      nationality: "Русский",
      gender: "female",
      ghostControl: "Текст",
      specialNotes: "Особые отметки отсутствуют",
    },
    {
      id: "1257577",
      fullName: "Смирнов Дмитрий Павлович",
      birthDate: "22.12.2000",
      birthCountry: "Финляндия",
      birthCity: "Хельсинки",
      arrivalCountry: "Финляндия",
    },
    {
      id: "1257577",
      fullName: "Кузнецова Ольга Михайловна",
      birthDate: "22.12.2000",
      birthCountry: "Польша",
      birthCity: "Варшава",
      arrivalCountry: "Польша",
    },
    {
      id: "1257577",
      fullName: "Волкова Анна Викторовна",
      birthDate: "22.12.2000",
      birthCountry: "Узбекистан",
      birthCity: "Ташкент",
      arrivalCountry: "Узбекистан",
    },
    {
      id: "1257577",
      fullName: "Никитин Алексей Игоревич",
      birthDate: "22.12.2000",
      birthCountry: "Российская Федерация",
      birthCity: "Москва",
      arrivalCountry: "Российская Федерация",
    },
    {
      id: "1257577",
      fullName: "Орлова Екатерина Васильевна",
      birthDate: "22.12.2000",
      birthCountry: "Финляндия",
      birthCity: "Хельсинки",
      arrivalCountry: "Финляндия",
    },
    {
      id: "1257577",
      fullName: "Сидоров Павел Николаевич",
      birthDate: "22.12.2000",
      birthCountry: "Польша",
      birthCity: "Польша",
      arrivalCountry: "Польша",
    },
    {
      id: "1257577",
      fullName: "Лебедева Наталья Евгеньевна",
      birthDate: "22.12.2000",
      birthCountry: "Узбекистан",
      birthCity: "Ташкент",
      arrivalCountry: "Узбекистан",
    },
    {
      id: "1257577",
      fullName: "Фёдорова Ирина Александровна",
      birthDate: "22.12.2000",
      birthCountry: "Польша",
      birthCity: "Варшава",
      arrivalCountry: "Польша",
    },
  ];

  function setActionsType(type: TActions) {
    setActions(type);
    setOpen(true);
  }

  useEffect(() => {
    if (!open) {
      setActions(null);
      setSelectedUser(null);
    }
  }, [open]);

  const handleUserSelect = (user: ImmigrantData) => {
    setSelectedUser(user);
    setActionsType("add");
  };

  function removeFilter(key: string) {
    setFilters((prev) => {
      return {
        ...prev,
        [key]: null,
      };
    });
  }
  function RenderData() {
    return (
      <>
        {Object.entries(filters).map(([key, value], i) => {
          if (value === null || value === undefined || value === "") {
            return null;
          }
          return (
            <div
              key={i}
              className="bg-white p-2 rounded-lg flex items-center gap-2 border border-base-600">
              <div className="flex text-sm items-center gap-1">
                <p className="text-base-400">{formatKey(key)}</p>:
                <span className="text-base-500 font-semibold">{value}</span>
              </div>
              <div
                onClick={() => removeFilter(key)}
                className="cursor-pointer hover:bg-slate-200 p-1 rounded-lg">
                <IconClose className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function formatKey(key: string) {
    switch (key) {
      case "birthDate":
        return "Дата рождения";
      case "country":
        return "Страна";
      case "nationality":
        return "Город рождения";
      default:
        return key;
    }
  }
  function removeFiltersAll() {
    setFilters({
      birthDate: null,
      country: null,
      nationality: null,
    });
  }
  const activeTitle = useMemo(() => {
    return actions === "add"
      ? "Добавить"
      : actions === "filter"
      ? "Фильтр"
      : "Слияние";
  }, [actions]);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Личность</h1>
        <div className="flex items-center gap-2">
          <Button className="bg-white flex items-center group shadow-sm custom-btn">
            <IconRetry className="w-4 h-4 text-white group-hover:stroke-primary" />
            Обновить
          </Button>
          <Button
            onClick={() => setActionsType("merger")}
            className="bg-white flex items-center shadow-sm custom-btn">
            <PathfinderDivide className="w-4 h-4" />
            Слияние
          </Button>
          <Badge onClick={() => setActionsType("filter")} dot={hasValues}>
            <Button className="bg-white flex items-center shadow-sm custom-btn">
              <FilterHorizontal className="w-4 h-4" />
              Фильтр
            </Button>
          </Badge>
          <Button
            onClick={() => setActionsType("add")}
            className="!bg-blue-500 group text-white hover:!text-white flex items-center shadow-sm">
            <PlusSign className="w-4 h-4" />
            Добавить
          </Button>
        </div>
      </div>
      {hasValues && (
        <div className="flex gap-2 items-center mt-6">
          <div className="flex items-center gap-2">{RenderData()}</div>
          <div
            onClick={() => removeFiltersAll()}
            className="bg-white border border-base-600 p-2 rounded-lg hover:bg-slate-50 transition-all duration-300 ease-linear hover:shadow-md flex items-center gap-2 w-fit cursor-pointer">
            <div className="cursor-pointer  p-1 rounded-lg">
              <IconCloseOutline className="w-5 h-5" />
            </div>
            <div className="flex text-sm items-center gap-1">
              <p className="text-base-500 font-semibold">Сбросить фильтр</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full bg-white rounded-xl border border-base-100 mt-6">
        <Table setSelectedUser={handleUserSelect} tableData={data} />
        <div className="mt-4 px-6 py-5">
          <UIpagination
            isFullWidth={true}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <UiDrawer
        title={selectedUser ? "Редактировать" : activeTitle}
        open={open}
        setOpen={setOpen}>
        {actions === "add" && (
          <UserAdd
            initialValues={selectedUser || undefined}
            setOpen={setOpen}
          />
        )}
        {actions === "filter" && (
          <UserFilter
            initialValues={filters}
            setFilters={setFilters}
            setOpen={setOpen}
          />
        )}
      </UiDrawer>
    </div>
  );
}

export default Users;
