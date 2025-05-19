"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bell } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            DISPARO
          </h1>
          <p className="text-gray-400">
            Gerador de notificações para aumentar seu engajamento
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => router.push("/dashboard")}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
          >
            Criar Notificações
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Link href="/inscrever" className="block">
            <Button
              variant="outline"
              className="w-full border-gray-800 bg-gray-900/50 hover:bg-gray-800/50"
            >
              <Bell className="mr-2 h-4 w-4" />
              Receber Notificações
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
