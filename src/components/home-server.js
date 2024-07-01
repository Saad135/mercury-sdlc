import { fetchAttractions } from "@/lib/directus";

import HomeProvider from "./home-provider";

export default async function HomeServer({ children }) {
  // Data fetching
  // Fetch attractions
  const attractionArr = await fetchAttractions();

  return (
    <>
      <HomeProvider fetchedAttractionArr={attractionArr}>
        {/* Children */}
        {children}
      </HomeProvider>
    </>
  );
}
