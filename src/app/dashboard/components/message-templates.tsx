"use client";

import { useState } from "react";
import { MessageSquare, Plus, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { NotificationType } from "../actions";

const DEFAULT_MESSAGES = [
  { id: "1", type: "pix" as NotificationType, text: "Pix Gerado!" },
  { id: "2", type: "venda" as NotificationType, text: "Venda Aprovada!" },
  { id: "3", type: "deposito" as NotificationType, text: "Depósito Recebido!" },
];

export function MessageTemplates() {
  const [messages, setMessages] = useState(DEFAULT_MESSAGES);
  const [newMessage, setNewMessage] = useState("");

  const addMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now().toString(),
          type: "pix",
          text: newMessage.trim(),
        },
      ]);
      setNewMessage("");
    }
  };

  const removeMessage = (id: string) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  return (
    <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Mensagens
        </CardTitle>
        <CardDescription>
          Personalize as mensagens das notificações
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Nova mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="bg-gray-950 border-gray-800"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={addMessage}
            className="border-gray-800 hover:bg-primary/20 hover:text-primary"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center justify-between rounded-md border border-gray-800 bg-gray-950/50 p-2"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="messages"
                  value={message.text}
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-700 bg-gray-900 text-primary"
                />
                <span className="text-sm">{message.text}</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeMessage(message.id)}
                className="h-7 w-7 text-gray-400 hover:text-red-500"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
