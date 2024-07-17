"use client";

import Container from "../container";
import EventCard from "./event-card";
import ToggleSelection from "./toggle-save";

export default function EventList({
  listName,
  containerClassName,

  children,
}) {
  return (
    <>
      <ListContainer className={containerClassName}>
        <p className="mb-2 text-xl">{listName}</p>

        {children}
      </ListContainer>
    </>
  );
}

export function ListCards({ statesObj, className, cardClassName }) {
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
            className={cardClassName}
          >
            <ToggleSelection extraClassnames="absolute right-0 top-0 z-30 " />
          </EventCard>
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
