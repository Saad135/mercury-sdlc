import { fetchAttractionById } from "@/lib/directus";

import DetailsProvider from "./details-provider";

export default async function DetailsServer({ id, children }) {
  // Data fetching
  // Fetch attractions
  const detailsData = await fetchDetailsData({ id });

  return (
    <>
      <DetailsProvider detailsData={detailsData}>
        {/* Children */}
        {children}
      </DetailsProvider>
    </>
  );
}

async function fetchDetailsData({ id }) {
  // Fetch attractions
  const event = await fetchAttractionById({ id });

  return { event };
}
