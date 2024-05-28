"use client";

import { Navbar, Footer } from "@/layouts";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = usePathname();

  return (
    <>
      <Navbar />
      {children}
      {router !== "/contact" && <Footer />}
    </>
  );
}
