import AttractionCard from "./attraction-card";

export default function AttractionList({ listName }) {
  return (
    <>
      <div className="my-2 rounded-xl bg-white p-4 shadow sm:container sm:mx-auto">
        <p className="mb-2">{listName}</p>

        {/* Card list */}
        <AttractionCard />
      </div>
    </>
  );
}
