import {Suspense} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "@/routes/routes";

const RouteProvider = () => {
    const router = createBrowserRouter(routes);
    return (
        <Suspense fallback={"Loading..."}>
            <RouterProvider router={router} />
        </Suspense>
    );
};
export default RouteProvider