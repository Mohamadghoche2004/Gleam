import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Gleam",
  description: "Gleam - Handcrafted Candles and Macrame Creations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
