import { fetchAttractions, fetchCategories } from "@/lib/directus";

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
  const homeData = {};

  // Fetch attractions
  homeData.attractionArr = await fetchAttractions();

  // Fetch Categories
  homeData.categoryArr = await fetchCategories();

  return homeData;
}
