// client.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zlzo2zo8", // you can find this in sanity.json
  dataset: "production",
  apiVersion: "2023-02-28",
  useCdn: true, // `false` if you want to ensure fresh data
});
