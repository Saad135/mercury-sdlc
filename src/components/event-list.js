"use client";

import Container from "./container";
import EventCard from "./event-card";
import { useHomeStates } from "./home-provider";

export default function EventList({ listName }) {
  return (
    <>
      <EventContainer>
        <p className="mb-2 text-xl">{listName}</p>

        <ListCards />
      </EventContainer>
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

function EventContainer({ children }) {
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
