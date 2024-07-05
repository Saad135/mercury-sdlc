import EventList from "@/components/events/event-list";

export default function Home() {
  return (
    <div className="grow overflow-auto pb-20">
      {/* List of cards */}
      <EventList listName={"Attractions"} />
    </div>
  );
}
