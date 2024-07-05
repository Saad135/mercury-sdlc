"use client";

import AttractionCard from "./attraction-card";
import Container from "./container";
import { useHomeStates } from "./home-provider";

export default function AttractionList({ listName }) {
  // States
  const statesArr = useAttractionListStates();

  return (
    <>
      <AttractionContainer>
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
      </AttractionContainer>
    </>
  );
}

function AttractionContainer({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

function useAttractionListStates() {
  // State for list of cards
  const stateArr = useHomeStates();

  return stateArr;
}
