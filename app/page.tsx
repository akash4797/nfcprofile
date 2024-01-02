"use client";
import Header from "@/components/landingpage/Header";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  const { status } = useSession();
  if (status === "loading") return <Loading />;
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div className="container py-5">Home Page</div>
    </div>
  );
}
