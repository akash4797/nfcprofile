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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default async function Profile({ params }: { params: { id: string } }) {
  const { id } = params;
  const userProfile = await getUserProfile(id);
  const background = urlFor(userProfile?.backgroundimage);

  console.log(userProfile);
  return (
    <div className={`h-screen w-full relative flex bg-black`}>
      <div className="absolute z-10 w-full h-full bg-black">
        <Image
          src={background}
          width={1200}
          height={1200}
          alt=""
          className="h-full w-full object-cover opacity-55"
        />
      </div>
      <div className="z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full container">
        <div className=" bg-black w-full rounded-lg shadow-lg">
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
          <ScrollArea className="h-[430px] w-full relative">
            <div className="absolute bg-gradient-to-b from-black to-transparent w-full h-20"></div>
            <div className="p-5 text-white flex flex-col gap-2 mt-3">
              <span className="text-2xl font-bold">
                {userProfile?.displayname}
              </span>
              {userProfile?.company.map((scompany) => (
                <div className="flex flex-col" key={scompany._key}>
                  <span className="text-base">{scompany.name}</span>
                  <span className="text-sm font-thin">{scompany.position}</span>
                </div>
              ))}
              <div className="border flex flex-col items-start gap-3 p-2 mt-2 rounded-lg">
                {userProfile?.displayemails.map((email) => (
                  <div className="" key={email._key}>
                    <div className="flex">
                      <MdOutlineAlternateEmail size={20} />
                      <span>{email.place}:</span>
                    </div>
                    <span className="font-thin">{email.emailaddress}</span>
                  </div>
                ))}
              </div>

              <div className="border flex items-start flex-col gap-3 p-2 mt-2 rounded-lg">
                {userProfile?.contacts.map((contact) => (
                  <div className="flex gap-2" key={contact._key}>
                    <div className="flex gap-2">
                      <MdOutlineContactPhone size={20} />
                      <span>{contact.place}:</span>
                    </div>
                    <span className="font-thin">{contact.contactnumber}</span>
                  </div>
                ))}
              </div>

              {userProfile?.websites.map((website) => (
                <div
                  className="border flex items-center gap-3 p-2 mt-2 rounded-lg"
                  key={website}
                >
                  <CiLink size={20} />
                  <Link href={website} target="_blank">
                    <span className=" font-thin">{website}</span>
                  </Link>
                </div>
              ))}

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
          </ScrollArea>
        </div>
        <div className="z-50 mt-2">
          <Button
            className="w-full bg-black bg-blend-multiply bg-opacity-90 rounded-lg"
            style={{
              backgroundImage: `url('${urlFor(userProfile?.backgroundimage)}')`,
            }}
          >
            Save Contact
          </Button>
        </div>
      </div>
    </div>
  );
}
