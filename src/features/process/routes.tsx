import ProcessPage from "./views";
import ProcessId from "./views/process_id";
import type { CustomRoute } from "@/types";
import Container from "./components/container";
const ProcessRoutes: CustomRoute[] = [
  {
    id: "process",
    title: "process",
    path: "process",
    element: <Container of={<ProcessPage />} />,
    children: [
      {
        id: "process_id",
        title: "process_id",
        path: "/process/:id",
        element: <ProcessId />,
      },
    ],
  },
];

export default ProcessRoutes;
