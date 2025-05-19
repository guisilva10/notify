"use client";

import type { NotificationConfig } from "../../actions";
import { getAppIcon } from "../utils";

export function Notification({
  notification,
}: {
  notification: NotificationConfig;
}) {
  const { app, message, value, timestamp } = notification;
  const icon = getAppIcon(app);

  return (
    <div className="notification-animation rounded-lg bg-gray-800/90 backdrop-blur-sm p-3 shadow-lg border border-gray-700">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="font-medium text-white">{message}</p>
            <span className="text-xs text-gray-400">{timestamp}</span>
          </div>
          <p className="text-sm text-gray-300">
            Sua comissão R${value.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
