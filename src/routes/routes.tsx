import type { CustomRoute } from "@/types/index";
import HomeRoutes from "@/features/home/routes";
import AboutRoutes from "@/features/about/routes";
import ProfileRoutes from "@/features/profile/routes";
import Root from "@/views/root";
import { sift } from "radash";
import ProfileLayout from "@/layouts/profile-layout";

const routes: CustomRoute[] = [
  {
    id: "root",
    path: "/",
    element: <Root />,
    children: sift([...HomeRoutes, ...AboutRoutes]),
  },
  {
    id: "profile-root",
    element: <ProfileLayout />,
    children: sift([...ProfileRoutes]),
  },
];
export default routes;
