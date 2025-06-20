import type {CustomRoute} from "@/types/index"
import HomeRoutes from "@/features/home/routes";
import  AboutRoutes  from "@/features/about/routes";
import Root from "@/views/root";
import { sift } from "radash";

const routes:CustomRoute[] = [{
   id: "root",
   path: "/",
   element: <Root />,
   children: sift([
      ...HomeRoutes,
      ...AboutRoutes
   ])
}]
export default routes;
