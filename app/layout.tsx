import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "E-PPID PN Sragen",
    template: "%s | E-PPID PN Sragen",
  },
  description: "Portal layanan informasi publik Pengadilan Negeri Sragen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}