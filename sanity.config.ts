import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas";

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export default defineConfig({
  basePath: "/studio",
  name: "Matt_Portfolio",
  title: "Matt Portfolio",

  projectId,
  dataset,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
