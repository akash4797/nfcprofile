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
import { MdOutlineDarkMode } from "react-icons/md";
import Loading from "../Loading/Loading";

export default function Header() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const loginHandler = async () => {
    try {
      await signIn();
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "loading") return <Loading />;

  return (
    <div className="flex flex-col justify-center">
      <header className="w-full bg-gray-200 shadow-sm">
        <div className="w-full flex justify-between py-5 container items-center">
          <Link href={"/"} className="flex justify-center items-center gap-2">
            <Image
              src={"/logo.png"}
              height={527}
              width={640.95}
              alt="logo"
              className=" w-10"
            />
            <span className="text-base">Smart Profile</span>
          </Link>
          <ul className="flex gap-5 uppercase text-sm justify-center items-center">
            <li>
              <MdOutlineDarkMode size={20} />
            </li>
            <Link href={"/"}>
              <li
                className={`${
                  pathname === "/" ? "font-bold bg-white" : ""
                } p-2 rounded`}
              >
                Home
              </li>
            </Link>
            <Link href={"/aboutus"}>
              <li
                className={`${
                  pathname === "/aboutus" ? "font-bold bg-white" : ""
                } rounded p-2`}
              >
                About
              </li>
            </Link>
            <li>
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
                    <DropdownMenuItem>
                      <Link href={"/userpanel"}>My Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="flex gap-3">
                  <Button variant={"default"} onClick={loginHandler}>
                    Login
                  </Button>
                  {/* <Link href={"/auth/signup"}>
                <Button variant={"default"}>Create Account</Button>
              </Link> */}
                </div>
              )}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
