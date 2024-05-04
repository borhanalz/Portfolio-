import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'Assets/Css/global.scss'
import Header from "Components/_core/Layouts/Header";

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
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
