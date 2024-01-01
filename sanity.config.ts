import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "8v4btt2x",
  dataset: "production",
  title: "SMART PROFILE",
  apiVersion: "2023-12-31",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
