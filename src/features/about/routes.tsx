import AboutPage from "./views";
import type { CustomRoute } from "@/types";
const AboutRoutes: CustomRoute[] = [
  {
    id: "about",
    title: "About",
    path: "/about",
    element: <AboutPage />,
  },
];

export default AboutRoutes;
