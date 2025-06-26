import { Dayjs } from "dayjs";

export interface BaseImmigrantData {
    fullName: string;
    birthDate: string | Dayjs;
    birthCountry: string;
    birthCity: string;
}

export interface ImmigrantData extends BaseImmigrantData {
    id: number | string;
    arrivalCountry?: string;
    passport?: string;
    passportExpiry?: Dayjs;
    nationality?: string;
    gender?: string;
    ghostControl?: string;
    specialNotes?: string;
}

export interface TableImmigrantData extends ImmigrantData {
    key: number;
} 