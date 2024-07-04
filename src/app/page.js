import AttractionList from "@/components/attraction-list";

export default function Home() {
  return (
    <div className="grow overflow-auto pb-20">
      {/* List of cards */}
      <AttractionList listName={"Attractions"} />
    </div>
  );
}
