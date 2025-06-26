import VisaPage from "./views";
import type { CustomRoute } from "@/types";
const VisaRoutes: CustomRoute[] = [
    {
        id: "visa",
        title: "visa",
        path: "visa",
        element: <VisaPage />,
    },
];

export default VisaRoutes;