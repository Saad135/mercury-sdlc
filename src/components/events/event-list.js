"use client";

import Container from "../container";
import EventCard from "./event-card";

export default function EventList({
  listName,
  statesObj,
  containerClassName,
  cardsClassName,
}) {
  return (
    <>
      <ListContainer className={containerClassName}>
        <p className="mb-2 text-xl">{listName}</p>

        <ListCards className={cardsClassName} statesObj={statesObj} />
      </ListContainer>
    </>
  );
}

function ListCards({ statesObj, className }) {
  // States

  return (
    <>
      {/* Card list */}
      <div
        className={
          className
            ? className
            : "w-full sm:flex sm:flex-wrap sm:justify-around"
        }
      >
        {/* Cards */}
        {statesObj?.attractionArr?.map((attractionItem, idx) => (
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

function ListContainer({ children, className }) {
  return (
    <>
      <Container className={className}>{children}</Container>
    </>
  );
}
