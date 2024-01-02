import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";

const sanityClient: SanityClient = createClient({
  projectId: "8v4btt2x",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_STUDIO_TOKEN,
  apiVersion: "2023-12-31",
});

export default sanityClient;
