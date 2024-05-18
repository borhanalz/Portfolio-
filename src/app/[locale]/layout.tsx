import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'Assets/Css/global.scss'
import Header from "Components/_core/Layouts/Header/Header";
import Container from "Components/_core/Layouts/Container/Container";
import MainProvider from "Core/Providers/MainProvider";
import { useTranslations } from "next-intl";
import MainLayout from "Components/_core/Layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borhan Alizadeh",
  description: "Borhan Alizadeh Frontend Developer",
};

export default function RootLayout({
  children,params:{locale}
}: Readonly<{
  children: React.ReactNode;
  params:{locale:string}
}>)
{
  return (
    <html lang={locale}>
      <MainProvider>
      <body>
        <MainLayout>
        {children}
        </MainLayout>
      </body>
      </MainProvider>
    </html>
  );
}
