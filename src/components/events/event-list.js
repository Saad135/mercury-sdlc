"use client";

import Container from "../container";
import { useHomeStates } from "../home/home-provider";
import EventCard from "./event-card";

export default function EventList({ listName }) {
  return (
    <>
      <ListContainer>
        <p className="mb-2 text-xl">{listName}</p>

        <ListCards />
      </ListContainer>
    </>
  );
}

function ListCards() {
  // States
  const statesArr = useEventListStates();

  return (
    <>
      {/* Card list */}
      <div className="w-full sm:flex sm:flex-wrap sm:justify-around">
        {/* Cards */}
        {statesArr?.attractionArr?.map((attractionItem, idx) => (
          <EventCard
            mediaUrl={attractionItem?.mediaUrl}
            title={attractionItem?.title}
            key={idx}
            id={attractionItem?.id}
          />
        ))}
      </div>
    </>
  );
}

function ListContainer({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}

function useEventListStates() {
  // State for list of cards
  const stateArr = useHomeStates();

  return stateArr;
}
