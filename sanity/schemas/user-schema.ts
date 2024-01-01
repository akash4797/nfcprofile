import { defineField } from "sanity";

const user = {
  name: "user",
  title: "Users",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "username",
      title: "User Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "ALT",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default user;
