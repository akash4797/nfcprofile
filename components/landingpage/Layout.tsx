"use client";
import React from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  if (pathName.startsWith("/studio") || pathName.startsWith("/profile"))
    return <>{children}</>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="">{children}</div>
    </div>
  );
}
