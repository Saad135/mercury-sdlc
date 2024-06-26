import AttractionList from "@/components/attraction-list";
import SignInButton from "@/components/sigin-button";

export default function Home() {
  return (
    <div className="grow overflow-auto">
      {/* List of cards */}
      <AttractionList listName={"Attractions"} />

      {/* Signin button showing up at the bottom for small screens */}
      <div className="absolute inset-x-0 bottom-0 z-50 my-10 px-4 sm:hidden">
        <SignInButton
          className={
            "w-full rounded-full border border-blue-800 bg-blue-800 p-2 text-white shadow shadow-blue-200 hover:shadow-sm active:bg-white active:text-blue-800"
          }
        />
      </div>
    </div>
  );
}
