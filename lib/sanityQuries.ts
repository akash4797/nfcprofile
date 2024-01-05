import { groq } from "next-sanity";

export const getUserProfileQuery = groq`*[_type == "profile" && user._ref == $userid][0]{_id,displayemail,displayname,contact,facebook,instagram,linkedin,website,user}`;
