"use client";

import AttractionCard from "./attraction-card";
import { useHomeStates } from "./home-provider";

export default function AttractionList({ listName }) {
  // States
  const statesArr = useAttractionListStates();

  return (
    <>
      <div className="my-2 rounded-xl bg-white p-4 shadow sm:container sm:mx-auto">
        <p className="mb-2 text-xl">{listName}</p>

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
  const stateArr = useHomeStates();

  return stateArr;
}
