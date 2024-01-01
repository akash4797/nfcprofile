import React from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex flex-col justify-center">
      <header className="w-full bg-slate-50 shadow-sm">
        <div className="w-full flex justify-between py-5 container items-center">
          <h1 className="font-semibold">NFC Smart Card</h1>
          <div className="flex gap-3">
            <Button variant={"outline"}>Login</Button>
            <Button variant={"default"}>Create Account</Button>
          </div>
        </div>
      </header>
    </div>
  );
}
