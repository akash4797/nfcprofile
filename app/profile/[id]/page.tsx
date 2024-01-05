import React from "react";
import { getUserProfile } from "@/lib/apis";
import urlFor from "@/lib/imageBuilder";
import Image from "next/image";
import { MdOutlineAlternateEmail, MdOutlineContactPhone } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import Link from "next/link";

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params;
  const userProfile = await getUserProfile(id);
  console.log(userProfile);
  return (
    <div className={`h-screen w-full relative`}>
      <div className="absolute z-10 w-full h-full bg-black">
        <Image
          src={urlFor(userProfile?.backgroundimage)}
          width={1200}
          height={1200}
          alt=""
          className="h-full w-full object-cover opacity-55"
        />
      </div>
      <div className="z-50 absolute top-0 left-0 w-full h-full flex">
        <div className="m-8 bg-black w-full rounded-lg shadow-lg">
          <div className="relative h-80">
            <div className="absolute bg-gradient-to-b from-transparent to-black top-0 left-0 w-full h-full rounded-t-lg"></div>
            <Image
              src={urlFor(userProfile?.user.image)}
              alt=""
              width={1200}
              height={1200}
              className="w-full h-80 object-cover rounded-t-lg"
            />
          </div>
          <div className="p-5 text-white flex flex-col gap-2">
            <span className="text-2xl font-bold">
              {userProfile?.displayname}
            </span>
            <span className="text-base font-thin">
              {userProfile?.company.name}
            </span>
            <span className="text-sm font-thin">
              {userProfile?.company.position}
            </span>
            <div className="border flex items-center gap-3 p-2 mt-2 rounded-lg">
              <MdOutlineAlternateEmail size={20} />
              <span className=" font-thin">{userProfile?.displayemail}</span>
            </div>
            <div className="border flex items-center gap-3 p-2 mt-2 rounded-lg">
              <MdOutlineContactPhone size={20} />
              <span className=" font-thin">{userProfile?.contact}</span>
            </div>
            {userProfile?.website && (
              <div className="border flex items-center gap-3 p-2 mt-2 rounded-lg">
                <CiLink size={20} />
                <Link href={userProfile?.website} target="_blank">
                  <span className=" font-thin">{userProfile?.website}</span>
                </Link>
              </div>
            )}
            <div className="mt-2">
              <h2>Find me on Social Medias</h2>
              <div className="mt-3 flex gap-5">
                {userProfile?.facebook && (
                  <Link href={userProfile.facebook} target="_blank">
                    <FaFacebookSquare size={30} />
                  </Link>
                )}
                {userProfile?.instagram && (
                  <Link href={userProfile.instagram} target="_blank">
                    <FaInstagramSquare size={30} />
                  </Link>
                )}
                {userProfile?.linkedin && (
                  <Link href={userProfile.linkedin} target="_blank">
                    <FaLinkedinIn size={30} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
