"use client";

import { useState } from "react";
import { Check, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AppType } from "../actions";

const APPS: { id: AppType; name: string; icon: string }[] = [
  { id: "whatsapp", name: "WhatsApp", icon: "🟢" },
  { id: "telegram", name: "Telegram", icon: "🔵" },
  { id: "instagram", name: "Instagram", icon: "🟣" },
  { id: "facebook", name: "Facebook", icon: "🔷" },
  { id: "email", name: "Email", icon: "📧" },
];

export function AppSelector() {
  const [selectedApps, setSelectedApps] = useState<AppType[]>(["whatsapp"]);

  const toggleApp = (app: AppType) => {
    if (selectedApps.includes(app)) {
      setSelectedApps(selectedApps.filter((a) => a !== app));
    } else {
      setSelectedApps([...selectedApps, app]);
    }
  };

  return (
    <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Smartphone className="h-5 w-5 text-primary" />
          Aplicativos
        </CardTitle>
        <CardDescription>
          Selecione os aplicativos para suas notificações
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2">
          {APPS.map((app) => (
            <button
              key={app.id}
              className={`relative flex flex-col items-center justify-center rounded-lg border border-gray-800 p-3 transition-all ${
                selectedApps.includes(app.id)
                  ? "bg-primary/10 border-primary/50"
                  : "bg-gray-950/50 hover:bg-gray-900/30"
              }`}
              onClick={() => toggleApp(app.id)}
            >
              {selectedApps.includes(app.id) && (
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-3 w-3" />
                </div>
              )}
              <div className="text-2xl">{app.icon}</div>
              <div className="mt-1 text-xs">{app.name}</div>
              <input
                type="checkbox"
                name="apps"
                value={app.id}
                checked={selectedApps.includes(app.id)}
                onChange={() => {}}
                className="sr-only"
              />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
