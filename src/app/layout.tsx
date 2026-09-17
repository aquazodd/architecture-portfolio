import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yohannes Abiti — Architecture",
  description:
    "Architecture, spatial design and architectural representation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}