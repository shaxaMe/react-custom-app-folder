import HomePage from "./views";
import type { CustomRoute } from "@/types";

const HomeRoutes: CustomRoute[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    element: <HomePage />,
  },
];

export default HomeRoutes;
