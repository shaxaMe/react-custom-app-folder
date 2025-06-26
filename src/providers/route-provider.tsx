import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "@/routes/routes";
import { Spin } from "antd";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Spin size="large" />
    </div>
  );
}

const RouteProvider = () => {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default RouteProvider;
