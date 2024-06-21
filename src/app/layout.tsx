import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { Banner } from "components/Banner";
import { Drawer } from "components/Drawer";
import { DrawerProvider } from "context/DrawerContext";

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
    <DrawerProvider>
      <html lang="pt-BR" className={inter.className}>
        <body className="overflow-x-hidden">
          <Header />
          {children}
          <Banner text="Crie sua conta agora e mostre ao mundo seu setup único e eleve seu nível de jogo. Cadastre-se já e brilhe no FlareHub!"/>
          <Drawer />
          <Footer />
        </body>
      </html>
    </DrawerProvider>
  );
}
