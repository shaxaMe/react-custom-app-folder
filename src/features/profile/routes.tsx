import { lazy } from "react";
import type { CustomRoute } from "@/types";
const ProfilePage = lazy(() => import("./views"));
const ProfileRoutes: CustomRoute[] = [
  {
    id: "profile",
    title: "profile",
    path: "/profile",
    element: <ProfilePage />,
  },
];

export default ProfileRoutes;
