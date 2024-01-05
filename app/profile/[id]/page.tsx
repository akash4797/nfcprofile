import React from "react";
import { getUserProfile } from "@/lib/apis";
import { userProfile } from "@/app/models/profile";

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params;
  const userProfile = await getUserProfile(id);
  console.log(userProfile);
  return <div className="">{id}</div>;
}
