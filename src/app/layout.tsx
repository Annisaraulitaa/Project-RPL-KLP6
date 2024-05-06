import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/layouts";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PSM Unhas",
  description: "Paduan Suara Mahasiswa Universitas Hasanuddin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
