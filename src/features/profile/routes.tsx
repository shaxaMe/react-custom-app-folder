import ProfilePage from "./views";
import type { CustomRoute } from "@/types";

const ProfileRoutes: CustomRoute[] = [
  {
    id: "profile",
    title: "profile",
    path: "/profile",
    element: <ProfilePage />,
  },
];

export default ProfileRoutes;
