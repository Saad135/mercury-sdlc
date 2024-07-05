import { fetchAttractionsFromDirectus } from "@/lib/directus";

import HomeProvider from "./home-provider";

export default async function HomeServer({ children }) {
  // Data fetching
  // Fetch attractions
  const homeData = await fetchHomeData();

  return (
    <>
      <HomeProvider homeData={homeData}>
        {/* Children */}
        {children}
      </HomeProvider>
    </>
  );
}

async function fetchHomeData() {
  // Fetch attractions
  const attractionArr = await fetchAttractionsFromDirectus();

  return { attractionArr };
}
