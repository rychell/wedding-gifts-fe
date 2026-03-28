import type { ReactNode } from "react";
import { WhatsAppButton } from "./whatsapp-button";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex flex-col">{children}</main>
      <WhatsAppButton />
    </div>
  );
}