"use client";

import { useEffect, useState } from "react";
import type { NotificationConfig } from "../../actions";
import { Notification } from "./notification";

export function NotificationList({
  notifications,
}: {
  notifications: NotificationConfig[];
}) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (notifications.length === 0) return;

    // Mostrar notificações uma a uma com um pequeno atraso
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < notifications.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [notifications.length]);

  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-4">
        <div className="text-4xl mb-4">📱</div>
        <h3 className="text-lg font-medium mb-2">Nenhuma notificação</h3>
        <p className="text-sm text-gray-400">
          Volte para a tela anterior e gere algumas notificações
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2 py-2 notification-container">
      {notifications.slice(0, visibleCount).map((notification, index) => (
        <Notification key={index} notification={notification} />
      ))}
    </div>
  );
}
