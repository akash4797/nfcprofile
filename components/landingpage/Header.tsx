"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import urlFor from "@/lib/imageBuilder";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  console.log(pathname);

  const loginHandler = async () => {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <header className="w-full bg-gray-200 shadow-sm">
        <div className="w-full flex justify-between py-5 container items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              height={527}
              width={640.95}
              alt="logo"
              className=" w-12"
            />
          </Link>
          <ul className="flex gap-5 uppercase text-sm">
            <Link href={"/"}>
              <li className={`${pathname === "/" ? "font-bold" : ""}`}>Home</li>
            </Link>
            <Link href={"/aboutus"}>
              <li className={`${pathname === "/aboutus" ? "font-bold" : ""}`}>
                About
              </li>
            </Link>
          </ul>
          {status === "authenticated" ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  {session?.user?.image ? (
                    <AvatarImage
                      src={urlFor(session?.user?.image)}
                      alt={session?.user?.name as string}
                    />
                  ) : (
                    <AvatarFallback>
                      {session?.user?.name?.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>My Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-3">
              <Button variant={"outline"} onClick={loginHandler}>
                Login
              </Button>
              <Link href={"/auth/signup"}>
                <Button variant={"default"}>Create Account</Button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
