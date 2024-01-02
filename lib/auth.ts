import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import sanityClient from "./sanity";

export const authOptions: NextAuthOptions = {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_ID as string,
    // }),
    SanityCredentials(sanityClient),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userIDObject = await sanityClient.fetch<{ _id: string }>(
        `*[_type == "user" && email == $email][0] {
        _id
      }`,
        { email: userEmail }
      );
      return {
        ...session,
        user: {
          ...session.user,
          id: userIDObject._id,
        },
      };
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
