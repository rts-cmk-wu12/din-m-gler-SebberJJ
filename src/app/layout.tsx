import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HouseProvider } from "@/context/fetchHouseProvider";

export const metadata: Metadata = {
  title: "DinMægler",
  description: "Danmarks bedste ejendomsmægler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HouseProvider>
          {children}
        </HouseProvider>
      <Footer />
      </body>
    </html>
  )
}