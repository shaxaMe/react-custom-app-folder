import { Suspense, useEffect } from "react";
import { Navigate, Outlet, useMatch } from "react-router-dom";
import type { CustomRoute } from "@/types";
import DefaultLayout from "@/layouts/default-layout";
interface Props {
  getRoutes?: () => CustomRoute[];
}

export default function Root(props: Props): React.ReactElement {
  return (
    <Suspense fallback={"<Spinner />"}>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </Suspense>
  );
}
