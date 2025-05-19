"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type NotificationType = "pix" | "venda" | "deposito" | "transferencia";
export type AppType =
  | "whatsapp"
  | "telegram"
  | "instagram"
  | "facebook"
  | "email";

export type NotificationConfig = {
  type: NotificationType;
  app: AppType;
  message: string;
  value: number;
  timestamp: string;
};

export async function generateNotifications(formData: FormData) {
  // Simulando um atraso para processamento
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const types = formData.getAll("types") as NotificationType[];
  const apps = formData.getAll("apps") as AppType[];
  const messages = formData.getAll("messages") as string[];
  const minValue = Number.parseFloat(formData.get("minValue") as string) || 5;
  const maxValue = Number.parseFloat(formData.get("maxValue") as string) || 100;
  const count = Number.parseInt(formData.get("count") as string) || 5;
  const sendReal = formData.get("sendReal") === "true";

  // Gerar configurações de notificações com base nos parâmetros
  const notifications: NotificationConfig[] = [];

  for (let i = 0; i < count; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const app = apps[Math.floor(Math.random() * apps.length)];
    const message = messages[Math.floor(Math.random() * messages.length)];
    const value = Number.parseFloat(
      (Math.random() * (maxValue - minValue) + minValue).toFixed(2)
    );

    // Gerar timestamp aleatório nas últimas 24 horas
    const now = new Date();
    const hoursAgo = Math.floor(Math.random() * 24);
    const minutesAgo = Math.floor(Math.random() * 60);
    now.setHours(now.getHours() - hoursAgo);
    now.setMinutes(now.getMinutes() - minutesAgo);

    const timestamp = `Ontem ${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    notifications.push({
      type,
      app,
      message,
      value,
      timestamp,
    });
  }

  // Enviar notificações reais para os clientes inscritos
  if (sendReal) {
    try {
      // Converter as notificações para o formato esperado pelo service worker
      const pushNotifications = notifications.map((notification) => ({
        title: notification.message,
        body: `Sua comissão R$${notification.value.toFixed(2)}`,
        icon: `/icons/${notification.app}-icon.png`,
        url: "/dashboard/preview",
        timestamp: notification.timestamp,
      }));

      // Enviar notificações para todos os clientes inscritos
      await fetch(
        `${process.env.NEXT_PUBLIC_APP_URL || ""}/api/clients/notify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ notifications: pushNotifications }),
        }
      );
    } catch (error) {
      console.error("Erro ao enviar notificações push:", error);
      // Continuar mesmo se houver erro no envio das notificações
    }
  }

  // Armazenar em cookies ou localStorage seria uma opção real
  // Aqui vamos usar searchParams para simplificar
  const searchParams = new URLSearchParams();
  searchParams.set("data", JSON.stringify(notifications));

  revalidatePath("/dashboard/preview");
  redirect(`/dashboard/preview?${searchParams.toString()}`);
}
