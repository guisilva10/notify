import type { Metadata } from "next";
import { NotificationList } from "./components/notification-lits";

import type { NotificationConfig } from "../actions";

export const metadata: Metadata = {
  title: "Visualização | DISPARO",
  description: "Visualize suas notificações geradas",
};

export default function PreviewPage({
  searchParams,
}: {
  searchParams: { data?: string };
}) {
  // Recuperar dados das notificações dos searchParams
  const notificationsData = searchParams.data
    ? (JSON.parse(searchParams.data) as NotificationConfig[])
    : [];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 container max-w-md mx-auto p-4 space-y-6">
        <NotificationList notifications={notificationsData} />
      </main>
    </div>
  );
}
