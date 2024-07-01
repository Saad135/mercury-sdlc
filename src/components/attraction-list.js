"use client";
import { useState } from "react";

import AttractionCard from "./attraction-card";

export default function AttractionList({ listName }) {
  // States
  const statesArr = useAttractionListStates();

  return (
    <>
      <div className="my-2 rounded-xl bg-white p-4 shadow sm:container sm:mx-auto">
        <p className="mb-2">{listName}</p>

        {/* Card list */}
        <div className="w-full sm:flex sm:flex-wrap sm:justify-around">
          {/* Cards */}
          {statesArr?.attractionArr?.map((attractionItem, idx) => (
            <AttractionCard
              mediaUrl={attractionItem?.mediaUrl}
              title={attractionItem?.title}
              key={idx}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function useAttractionListStates() {
  // State for list of cards
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [attractionArr, setAttractionArr] = useState([1, 2, 3, 4, 5, 6, 7]);

  return { attractionArr, setAttractionArr };
}
