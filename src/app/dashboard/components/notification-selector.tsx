"use client";

import { Bell, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { NotificationType } from "../actions";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const NOTIFICATION_TYPES: {
  id: NotificationType;
  name: string;
  icon: string;
}[] = [
  { id: "pix", name: "Pix", icon: "💸" },
  { id: "venda", name: "Venda", icon: "🛒" },
  { id: "deposito", name: "Depósito", icon: "💰" },
  { id: "transferencia", name: "Transferência", icon: "🔄" },
];

export function NotificationSelector() {
  const [selectedTypes, setSelectedTypes] = useState<NotificationType[]>([
    "pix",
    "venda",
  ]);
  const [count, setCount] = useState(5);

  const toggleType = (type: NotificationType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Tipos de Notificação
        </CardTitle>
        <CardDescription>
          Selecione os tipos e quantidade de notificações
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          {NOTIFICATION_TYPES.map((type) => (
            <button
              key={type.id}
              className={`relative flex items-center gap-2 rounded-lg border border-gray-800 p-3 transition-all ${
                selectedTypes.includes(type.id)
                  ? "bg-primary/10 border-primary/50"
                  : "bg-gray-950/50 hover:bg-gray-900/30"
              }`}
              onClick={() => toggleType(type.id)}
            >
              {selectedTypes.includes(type.id) && (
                <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-3 w-3" />
                </div>
              )}
              <div className="text-xl">{type.icon}</div>
              <div className="text-sm">{type.name}</div>
              <input
                type="checkbox"
                name="types"
                value={type.id}
                checked={selectedTypes.includes(type.id)}
                onChange={() => {}}
                className="sr-only"
              />
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="count">Quantidade de notificações</Label>
          <Input
            id="count"
            name="count"
            type="number"
            min={1}
            max={20}
            value={count}
            onChange={(e) => setCount(Number.parseInt(e.target.value) || 5)}
            className="bg-gray-950 border-gray-800"
          />
        </div>
      </CardContent>
    </Card>
  );
}
