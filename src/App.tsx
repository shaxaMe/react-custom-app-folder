import { RouteProvider, QueryProvider } from "./providers";
import { NotificationProvider } from "@/context/notification.tsx";

export default function App(): React.ReactElement {
  return (
    <QueryProvider>
      <NotificationProvider>
          <RouteProvider />
      </NotificationProvider>
    </QueryProvider>
  );
}
