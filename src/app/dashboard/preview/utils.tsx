import { Facebook, Instagram, Mail, MessageCircle, Send } from "lucide-react";
import type { AppType } from "../actions";

export function getAppIcon(app: AppType) {
  switch (app) {
    case "whatsapp":
      return <MessageCircle className="h-5 w-5" />;
    case "telegram":
      return <Send className="h-5 w-5" />;
    case "instagram":
      return <Instagram className="h-5 w-5" />;
    case "facebook":
      return <Facebook className="h-5 w-5" />;
    case "email":
      return <Mail className="h-5 w-5" />;
    default:
      return <MessageCircle className="h-5 w-5" />;
  }
}
