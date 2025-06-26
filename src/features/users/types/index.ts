import { ImmigrantData } from "@/types/table/table";
import dayjs from "dayjs";

// Action types
type TActions = "add" | "filter" | "merger";

// Detail view action types
type TDetailActions = "basic" | "passport" | "visaRequests" | "visas" | "registration" | "ovir";

// Filter interfaces
interface iFilters {
  birthDate?: string | null;
  country?: string | null;
  nationality?: string | null;
}

// Form value interfaces
interface FormValues {
  fullName: string;
  birthDate: dayjs.Dayjs;
  passport: string;
  passportExpiry: dayjs.Dayjs;
  birthCountry: string;
  birthCity: string;
  nationality: string;
  gender: string;
  ghostControl: string;
  specialNotes: string;
}

interface FormValuesWithDate extends Omit<iFilters, "birthDate"> {
  birthDate: dayjs.Dayjs | null;
}

// Passport form interface
interface IPassportForm {
  fullname: string;
  passport_serial: string;
  passport_number: string;
  birth_date: string;
  citizenship: string;
  passport_expiry_date: string;
  special_notes: string;
}

// Component prop interfaces
interface IMigrantTable {
  tableData: ImmigrantData[];
  setSelectedUser: (user: ImmigrantData) => void;
}

interface IFilterProps {
  setOpen: (open: boolean) => void;
  initialValues?: iFilters;
  setFilters?: (filters: iFilters | ((prev: iFilters) => iFilters)) => void;
}

interface IUserAddProps {
  setOpen: (open: boolean) => void;
  initialValues?: ImmigrantData | null;
}

interface IAddPassportProps {
  setOpen: (open: boolean) => void;
  initialValues?: IPassportForm;
}

// Detail options type
type DetailOptions = { label: string; value: TDetailActions }[];

export type {
  TActions,
  TDetailActions,
  iFilters,
  FormValues,
  FormValuesWithDate,
  IPassportForm,
  IMigrantTable,
  IFilterProps,
  IUserAddProps,
  IAddPassportProps,
  DetailOptions
};