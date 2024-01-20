"use client";
import React from "react";
import { userProfile } from "../models/profile";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import urlFor from "@/lib/imageBuilder";

export default function UserPanelForm({
  userprofile,
}: {
  userprofile: userProfile;
}) {
  console.log(userprofile);

  return (
    <>
      <div className="mb-5">
        <Image
          src={urlFor(userprofile.user.image)}
          width={200}
          height={200}
          alt={userprofile.displayname}
          className="w-56 h-56 object-cover rounded-lg"
        />
      </div>
      {/* <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 p-5 bg-slate-200 rounded-lg">
          <Label>Your Display Name:</Label>
          <Input value={userprofile.displayname} placeholder="Display Name" />
        </div>
        <div className="flex flex-col gap-2 p-5 bg-slate-200 rounded-lg">
          <Label>Your Display Email:</Label>
          <Input value={userprofile.displayemail} placeholder="Display Email" />
        </div>
        <div className="flex flex-col gap-2 p-5 bg-slate-200 rounded-lg">
          <Label>Your Contact:</Label>
          <Input value={userprofile.contact} placeholder="Contact" />
        </div>
        <div className="flex flex-col gap-2 p-5 bg-slate-200 rounded-lg">
          <Label>Your Facebook URL:</Label>
          <Input value={userprofile.facebook} placeholder="Facebook URL" />
        </div>
      </form> */}
    </>
  );
}
