import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "components/Header";
import Footer from "components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flare Hub",
  description: "Veja aqui tudo sobre o mundo de e-sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-x-hidden">
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  );
}
