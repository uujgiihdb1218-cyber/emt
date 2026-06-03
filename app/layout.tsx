import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Эрүүл Мэндийн Төв",
  description: "Иргэдэд зориулсан эрүүл мэндийн мэдээлэл, үйлчилгээний портал",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}