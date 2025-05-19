"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ClientStats {
  total: number;
  active: number;
}

export function ClientStats() {
  const [stats, setStats] = useState<ClientStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/clients/stats");
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Clientes Inscritos
        </CardTitle>
        <CardDescription>
          Estatísticas de clientes que receberão suas notificações
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-around">
            <div className="text-center">
              <Skeleton className="h-8 w-16 mb-2 mx-auto" />
              <p className="text-xs text-gray-400">Total</p>
            </div>
            <div className="text-center">
              <Skeleton className="h-8 w-16 mb-2 mx-auto" />
              <p className="text-xs text-gray-400">Ativos</p>
            </div>
          </div>
        ) : stats ? (
          <div className="flex justify-around">
            <div className="text-center">
              <p className="text-3xl font-bold">{stats.total}</p>
              <p className="text-xs text-gray-400">Total</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">{stats.active}</p>
              <p className="text-xs text-gray-400">Ativos</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-400">
            Nenhum cliente inscrito ainda
          </p>
        )}
      </CardContent>
    </Card>
  );
}
