import { groq } from "next-sanity";

export const getUserProfileQuery = groq`*[_type == "profile" && user._ref == $userid][0]{_id,displayemails,displayname,contacts,facebook,instagram,linkedin,backgroundimage,websites,company,user->{_id,image}}`;
