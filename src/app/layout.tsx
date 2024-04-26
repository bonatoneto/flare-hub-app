import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flare Hub | Veja aqui tudo sobre o mundo do e-sports",
  description: "Veja aqui tudo sobre o mundo do e-sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="overflow-x-hidden">
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  );
}
