"use client";
import { createContext, useContext, useState } from "react";

const HomeContext = createContext(null);

export default function HomeProvider({ children }) {
  // Default values for the states
  const defaultStateVals = getDefaults();

  // State for list of cards
  const [attractionArr, setAttractionArr] = useState(
    defaultStateVals?.defaultAttractionsArr,
  );

  return (
    <>
      <HomeContext.Provider value={{ attractionArr, setAttractionArr }}>
        {children}
      </HomeContext.Provider>
    </>
  );
}

export function useHomeStates() {
  const context = useContext(HomeContext);
  return context;
}

function getDefaults() {
  const defaultAttractionsArr = [1, 2, 3, 4, 5, 6, 7];

  return { defaultAttractionsArr };
}
