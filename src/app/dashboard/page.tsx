import type { Metadata } from "next";
import { NotificationSelector } from "./components/notification-selector";
import { AppSelector } from "./components/app-selector";
import { MessageTemplates } from "./components/message-templates";
import { ValueSelector } from "./components/value-selector";
import { GenerateButton } from "./components/generate-button";

export const metadata: Metadata = {
  title: "Dashboard | DISPARO",
  description: "Crie suas notificações personalizadas",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 container max-w-5xl mx-auto p-4 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Criar Notificações</h1>
          <p className="text-gray-400 text-sm">
            Selecione os aplicativos, mensagens e valores para gerar suas
            notificações
          </p>
        </div>
        <div className="space-y-6">
          <AppSelector />
          <MessageTemplates />
          <ValueSelector />
          <NotificationSelector />
          <GenerateButton />
        </div>
      </main>
    </div>
  );
}
