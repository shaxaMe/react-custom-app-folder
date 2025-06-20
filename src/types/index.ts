import type {
  IndexRouteObject,
  NonIndexRouteObject,
  RouteObject,
} from "react-router-dom";

type AppLang = "ru" | "uzLatin" | "uzCryllic" | "en";

interface CustomNonIndexRouteObject extends NonIndexRouteObject {
  children?: Array<RouteObject & { title?: string }>;
}

type CustomRoute = (IndexRouteObject | CustomNonIndexRouteObject) & {
  title?: string;
};

interface BaseEntity {
  id: number;
  name: string;
}

interface BaseParams {
  page?: number;
  page_size?: number;
  name: string;
  category: string | number;
}

interface ListResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

interface IBranch {
  id: number;
  deleted: Date | null;
  deleted_by_cascade: boolean;
  name: string;
  created_at: Date;
  updated_at: Date;
}

type OrderType = "self" | "shipping";

type ClientType = "dept";

type OrderStatus = "new" | "in_process" | "finished" | "close";

type DeliveryStatus = "took" | "delivered";

type PaymentStatus = "paid" | "not_paid";

type ProductDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

type Category = "breakfasts" | "lunches" | "bar" | "snacks" | "pp" | "desserts";

export type {
  CustomRoute,
  AppLang,
  BaseEntity,
  BaseParams,
  ListResponse,
  IBranch,
  OrderType,
  ClientType,
  OrderStatus,
  PaymentStatus,
  ProductDay,
  Category,
  DeliveryStatus,
};
