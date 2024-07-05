import EventList from "@/components/events/event-list";
import MainDiv from "@/components/main-div";

export default function Home() {
  return (
    <MainDiv>
      {/* List of cards */}
      <EventList listName={"Attractions"} />
    </MainDiv>
  );
}
