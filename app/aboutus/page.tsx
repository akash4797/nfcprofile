"use client";
import Header from "@/components/landingpage/Header";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading/Loading";

export default function About() {
  const { status } = useSession();
  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div className="container py-5">About Page</div>
    </div>
  );
}
