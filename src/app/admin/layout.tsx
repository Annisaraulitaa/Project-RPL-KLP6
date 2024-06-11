"use client";

import { useEffect } from "react";
import { NavbarAdmin } from "@/layouts";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/signin";
      return;
    }

    try {
      const { exp } = JSON.parse(atob(token.split(".")[1]));
      if (Date.now() >= exp * 1000) {
        localStorage.removeItem("token");
        window.location.href = "/signin";
      }
    } catch (error) {
      console.error("Error parsing token:", error);
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }
  }, []);

  return (
    <>
      <NavbarAdmin />
      {children}
    </>
  );
};

export default Layout;
