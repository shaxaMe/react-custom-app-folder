import type { CustomRoute } from "@/types/index";
import HomeRoutes from "@/features/home/routes";
import AboutRoutes from "@/features/about/routes";
import ProfileRoutes from "@/features/profile/routes";
import ProcessRoutes from "@/features/process/routes";
import UsersRoutes from "@/features/users/routes";

import VisaRoutes from "@/features/visa/routes";
import { sift } from "radash";
import ProfileLayout from "@/layouts/profile-layout";
import Root from "@/views/root";

//pages

import LoginPage from "@/features/auth/login";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const routes: CustomRoute[] = [
  {
    id: "root",
    path: "/",
    element: (
      <ProtectedRoute>
        <Root />
      </ProtectedRoute>
    ),
    children: sift([
      ...HomeRoutes,
      ...AboutRoutes,
      ...ProcessRoutes,
      ...UsersRoutes,
      ...VisaRoutes,
    ]),
  },
  {
    id: "profile-root",
    element: (
      <ProtectedRoute>
        <ProfileLayout />
      </ProtectedRoute>
    ),
    children: sift([...ProfileRoutes]),
  },
  {
    id: "login",
    path: "/login",
    element: <LoginPage />,
  },
];
export default routes;
