"use client";

import { createContext, useContext, useState } from "react";

import { toggleItemInArr } from "@/lib/utils";

const AppContext = createContext(null);

export default function AppProvider({ children }) {
  // Default values for the states
  const defaultStateVals = getDefaults();

  // Object containing all the states
  const stateObj = useInternalStates(defaultStateVals);

  return (
    <>
      <AppContext.Provider value={stateObj}>{children}</AppContext.Provider>
    </>
  );
}

function useInternalStates(defaultStateVals) {
  const [savedIdArr, setSavedIdArr] = useState(defaultStateVals?.savedIdArr);

  const toggleSavedIdArr = (id) => {
    setSavedIdArr(toggleItemInArr({ id: id, activeIds: savedIdArr }));
  };

  return {
    savedIdArr,
    setSavedIdArr,
    toggleSavedIdArr,
  };
}

export function useCommonAppStates() {
  const context = useContext(AppContext);
  return context;
}

function getDefaults() {
  const defaultObj = {};

  defaultObj.savedIdArr = [];

  return defaultObj;
}
