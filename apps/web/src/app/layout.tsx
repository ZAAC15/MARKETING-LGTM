import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Dashboard | La Gran Tienda del Mecánico",
  description: "Plataforma privada de inteligencia comercial y marketing.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><AppShell>{children}</AppShell></body></html>;
}
