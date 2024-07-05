"use client";
import { createContext, useContext } from "react";

import { reformatItem } from "@/utils/common-utls";
import { reformatEventItem } from "@/utils/home-utils";

const DetailsContext = createContext(null);

export default function DetailsProvider({ children, detailsData }) {
  // Default values for the states
  const defaultStateVals = getDefaults({ detailsData });

  // Object containing all the states
  const stateObj = useInternalStates(defaultStateVals);

  return (
    <>
      <DetailsContext.Provider value={stateObj}>
        {children}
      </DetailsContext.Provider>
    </>
  );
}

function useInternalStates(defaultStateVals) {
  return { event: defaultStateVals?.event };
}

export function useDetailsPageStates() {
  const context = useContext(DetailsContext);
  return context;
}

function getDefaults({ detailsData }) {
  const event = reformatItem(detailsData?.event, reformatEventItem);

  return { event };
}
