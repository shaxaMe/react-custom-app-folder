import UsersPage from "./views";
import UsersId from "./views/user-id";
import type { CustomRoute } from "@/types";
import Container from "./components/container";
const ProcessRoutes: CustomRoute[] = [
  {
    id: "users",
    title: "users",
    path: "users",
    element: <Container of={<UsersPage />} />,
    children: [
      {
        id: "users_id",
        title: "users_id",
        path: "/users/:id",
        element: <UsersId />,
      },
    ],
  },
];

export default ProcessRoutes;
