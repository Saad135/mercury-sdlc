"use client";

import { createContext, useContext, useState } from "react";

import { updateEventsInSession } from "@/app/actions";
import { toggleItemInArr } from "@/utils/utils";

const AppContext = createContext(null);

export default function AppProvider({ children, defaultVals }) {
  // Default values for the states
  const defaultStateVals = getDefaults(defaultVals);

  // Object containing all the states
  const stateObj = useInternalStates(defaultStateVals);

  return (
    <>
      <AppContext.Provider value={stateObj}>{children}</AppContext.Provider>
    </>
  );
}

function useInternalStates(defaultStateVals) {
  const [savedEventArr, setSavedEventArr] = useState(
    defaultStateVals?.savedEventsArr,
  );

  const toggleSavedEventArr = (event) => {
    const newEventArr = toggleItemInArr({
      event: event,
      activeEvents: savedEventArr,
    });

    setSavedEventArr(newEventArr);

    // Save in session
    updateEventsInSession({ eventArr: newEventArr });
  };

  return {
    savedEventArr,
    setSavedEventArr,
    toggleSavedEventArr,
  };
}

export function useCommonAppStates() {
  const context = useContext(AppContext);
  return context;
}

function getDefaults(defaultVals) {
  const defaultObj = {};

  defaultObj.savedEventsArr = defaultVals?.savedEventArr
    ? defaultVals?.savedEventArr
    : [];

  return defaultObj;
}
