import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/landingpage/Header";
import Layout from "@/components/landingpage/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Profile",
  description: "Smart Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
        <Toaster />
      </NextAuthProvider>
    </html>
  );
}
