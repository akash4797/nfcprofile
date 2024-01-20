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
      name: "backgroundimage",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "array",
      of: [
        {
          name: "companyinfo",
          title: "Company Info",
          type: "document",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "position",
              title: "Postion",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "contacts",
      title: "Contacts",
      type: "array",
      of: [
        {
          name: "contact",
          title: "Contact",
          type: "document",
          fields: [
            {
              name: "place",
              title: "Place",
              type: "string",
            },
            {
              name: "contactnumber",
              title: "Contact Number",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "displayemails",
      title: "Display Emails",
      type: "array",
      of: [
        {
          name: "displayemail",
          title: "Display Email",
          type: "document",
          fields: [
            {
              name: "place",
              title: "Place",
              type: "string",
            },
            {
              name: "emailaddress",
              title: "Email Address",
              type: "string",
            },
          ],
        },
      ],
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
      name: "websites",
      title: "Websites",
      type: "array",
      of: [
        {
          name: "websiteurl",
          title: "Website Url",
          type: "string",
        },
      ],
    }),
  ],
};

export default profile;
