"use client";
import React, { useEffect } from "react";
import { userProfile } from "@/app/models/profile";
import { Button } from "@/components/ui/button";
import urlFor from "@/lib/imageBuilder";
import VCard from "vcard-creator";

export default function SaveContact({
  userprofile,
  userImage,
}: {
  userprofile: userProfile;
  userImage: string;
}) {
  const imageUrlToBase64 = async (url: string) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        resolve(base64data);
      };
      reader.onerror = reject;
    });
  };
  const downloadToFile = (
    content: string,
    filename: string,
    contentType: string
  ) => {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
  };

  const getVCard = async () => {
    const myVCard = new VCard();
    // const imagebase64 = await imageUrlToBase64(userImage);
    myVCard.addName(userprofile.displayname);
    // myVCard.addPhotoURL(userImage);
    // myVCard.addPhoto(imagebase64);
    userprofile.contacts.map((contact) => {
      myVCard.addPhoneNumber(contact.contactnumber, contact.place);
    });
    userprofile.displayemails.map((email) => {
      myVCard.addEmail(email.emailaddress, email.place);
    });

    if (userprofile.facebook)
      myVCard.addSocial(userprofile.facebook, "Facebook");
    if (userprofile.instagram)
      myVCard.addSocial(userprofile.instagram, "Instagram");
    if (userprofile.linkedin)
      myVCard.addSocial(userprofile.linkedin, "LinkedIn");

    if (userprofile.websites.length > 1) {
      userprofile.websites.map((website) => {
        myVCard.addURL(website);
      });
    }

    const output = myVCard.getOutput();
    console.log(output);
    downloadToFile(output, userprofile.displayname, "text/vcard");
  };

  return (
    <>
      <Button
        onClick={getVCard}
        className="w-full bg-black bg-blend-multiply bg-opacity-90 rounded-lg"
        style={{
          backgroundImage: `url('${urlFor(userprofile?.backgroundimage)}')`,
        }}
      >
        Save Contact
      </Button>
    </>
  );
}
