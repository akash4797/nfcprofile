import { defineField } from "sanity";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "displayname",
      title: "Display Name",
      type: "string",
    }),
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "user" },
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "string",
    }),
    defineField({
      name: "displayemail",
      title: "Display Email",
      type: "string",
    }),
    defineField({
      name: "facebook",
      title: "Facebook",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
    }),
    defineField({
      name: "youtube",
      title: "Youtube",
      type: "string",
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "string",
    }),
  ],
};

export default profile;
