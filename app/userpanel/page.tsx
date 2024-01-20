import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getUserProfile } from "@/lib/apis";
import UserPanelForm from "./UserPanelForm";
import { userProfile } from "../models/profile";

export default async function UserPanel() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  const userProfile = await getUserProfile(session?.user?.id);

  return (
    <div className="container py-5">
      <div className="py-5">
        <h1 className="text-2xl font-semibold">My Profile</h1>
      </div>
      <div className="">
        {userProfile && <UserPanelForm userprofile={userProfile} />}
      </div>
    </div>
  );
}
