// client.ts
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "zlzo2zo8", // you can find this in sanity.json
  dataset: "production",
  apiVersion: "2023-02-14",
  token: "", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
