"use client";

import { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Zap, Bell } from "lucide-react";
import { generateNotifications } from "../actions";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function GenerateButton() {
  const [isPending, startTransition] = useTransition();
  const [sendRealNotifications, setSendRealNotifications] = useState(false);

  return (
    <form
      action={(formData) => {
        // Adicionar flag para enviar notificações reais
        if (sendRealNotifications) {
          formData.append("sendReal", "true");
        }
        startTransition(() => generateNotifications(formData));
      }}
      className="space-y-4"
    >
      <div className="flex items-center space-x-2">
        <Switch
          id="send-real"
          checked={sendRealNotifications}
          onCheckedChange={setSendRealNotifications}
        />
        <Label htmlFor="send-real" className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-primary" />
          Enviar notificações reais
        </Label>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 h-12 text-lg"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Gerando...
          </>
        ) : (
          <>
            <Zap className="mr-2 h-5 w-5" />
            Gerar Notificações
          </>
        )}
      </Button>
    </form>
  );
}
