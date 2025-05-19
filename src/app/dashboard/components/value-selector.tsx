"use client";

import { DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function ValueSelector() {
  const [range, setRange] = useState<[number, number]>([5, 50]);

  return (
    <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          Valores
        </CardTitle>
        <CardDescription>
          Defina o intervalo de valores para as comissões
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <Slider
            defaultValue={[5, 50]}
            max={100}
            min={1}
            step={1}
            value={range}
            onValueChange={(value) => setRange(value as [number, number])}
            className="py-4"
          />

          <div className="flex justify-between">
            <div className="text-center">
              <div className="text-xs text-gray-400">Mínimo</div>
              <div className="text-lg font-medium">
                R$ {range[0].toFixed(2)}
              </div>
              <input type="hidden" name="minValue" value={range[0]} />
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400">Máximo</div>
              <div className="text-lg font-medium">
                R$ {range[1].toFixed(2)}
              </div>
              <input type="hidden" name="maxValue" value={range[1]} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
