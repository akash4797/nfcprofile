import { userProfile } from "@/app/models/profile";
import sanityClient from "./sanity";
import * as queries from "./sanityQuries";

// {next:{revalidate:1800}}

export const getUserProfile = async (userid: string) => {
  try {
    const result = await sanityClient.fetch<userProfile>(
      queries.getUserProfileQuery,
      { userid },
      { cache: "no-cache" }
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};
