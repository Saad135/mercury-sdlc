"use client";
import { createContext, useContext, useState } from "react";

import { extractCategoryNames, reformatEventsArr } from "@/utils/home-utils";

const HomeContext = createContext(null);

export default function HomeProvider({ children, homeData }) {
  // Default values for the states
  const defaultStateVals = getDefaults({ homeData });

  // Object containing all the states
  const stateObj = useInternalStates(defaultStateVals);

  return (
    <>
      <HomeContext.Provider value={stateObj}>{children}</HomeContext.Provider>
    </>
  );
}

function useInternalStates(defaultStateVals) {
  // State for list of cards
  const [attractionArr, setAttractionArr] = useState(
    defaultStateVals?.defaultAttractionsArr,
  );

  // State for categories
  const [categories, setCategories] = useState(
    defaultStateVals?.defaultCategoriesArr,
  );

  const [selectedCategory, setSelectedCategory] = useState(
    defaultStateVals?.defaultCategoriesArr[0],
  );

  return {
    attractionArr,
    setAttractionArr,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
  };
}

export function useHomeStates() {
  const context = useContext(HomeContext);
  return context;
}

function getDefaults({ homeData }) {
  const defaultAttractionsArr = homeData?.attractionArr
    ? reformatEventsArr(homeData?.attractionArr)
    : [1, 2, 3, 4, 5, 6, 7];

  const defaultCategoriesArr = homeData?.categoryArr
    ? extractCategoryNames(homeData?.categoryArr)
    : ["Category A", "Category B", "Category C"];

  return { defaultAttractionsArr, defaultCategoriesArr };
}
