import Container from "@/components/container";
import EventList, { ListCards } from "@/components/events/event-list";

export default function ProfilePage() {
  return (
    <>
      <div className="flex w-full flex-wrap-reverse">
        {/* Left Panel */}
        <PanelContentEvents
          className={
            "container mx-auto my-2 rounded-xl bg-white p-4 shadow sm:w-[48%]"
          }
        />
        {/* <Container
          className={
            "container mx-auto my-2 rounded-xl bg-white p-4 shadow sm:w-[48%]"
          }
        >
        </Container> */}

        {/* Right Panel */}
        <Container
          className={
            "container mx-auto my-2 rounded-xl bg-white p-4 shadow sm:w-[48%]"
          }
        >
          Hi
        </Container>
      </div>
    </>
  );
}

function PanelContentEvents({ className }) {
  const testObj = { attractionArr: [1, 2, 3, 4] };

  return (
    <>
      <EventList containerClassName={className} listName={"Master List"}>
        <ListCards
          cardClassName={"mx-2 mb-4 mt-2 border text-center shadow-lg w-full"}
          statesObj={testObj}
          isGroupedByCategory={false}
        ></ListCards>
      </EventList>
    </>
  );
}
