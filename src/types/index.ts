import type {
  IndexRouteObject,
  NonIndexRouteObject,
  RouteObject,
} from "react-router-dom";

interface CustomNonIndexRouteObject extends NonIndexRouteObject {
  children?: Array<RouteObject & { title?: string }>;
}

type CustomRoute = (IndexRouteObject | CustomNonIndexRouteObject) & {
  title?: string;
};
export type {
    CustomRoute
}