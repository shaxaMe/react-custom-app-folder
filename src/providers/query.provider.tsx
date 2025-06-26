import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { FC } from "react";
import type { ChildrenProps } from "@/types/common";

const queryClient = new QueryClient({
  defaultOptions: {},
});
const QueryProvider: FC<ChildrenProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
