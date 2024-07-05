import Container from "@/components/container";
import EventImage from "@/components/events/event-image";

export default function DetailsPage({ params }) {
  return (
    <>
      <Container>
        <EventImage className="h-56 w-full object-cover" />

        {/* Title */}
        <div className="my-4">
          <p className="text-2xl font-medium">Title</p>
        </div>

        <div className="my-4">Hi {params?.id}</div>
      </Container>
    </>
  );
}
