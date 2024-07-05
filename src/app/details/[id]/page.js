"use client";
import Container from "@/components/container";
import { useDetailsPageStates } from "@/components/details/details-provider";
import EventImage from "@/components/events/event-image";

export default function DetailsPage() {
  return (
    <>
      <Container>
        <HeroImage />

        <EventTitle />

        <EventDescription />
      </Container>
    </>
  );
}

function EventDescription() {
  const context = useDetailsPageStates();
  return (
    <>
      <div
        className="my-4"
        dangerouslySetInnerHTML={{ __html: context?.event?.description }}
      />
    </>
  );
}

function EventTitle() {
  const context = useDetailsPageStates();

  return (
    <>
      {/* Title */}
      <div className="my-4">
        <p className="text-2xl font-medium">
          {context?.event?.title ? context?.event?.title : "Exciting Event"}
        </p>
      </div>
    </>
  );
}

function HeroImage() {
  const context = useDetailsPageStates();

  return (
    <>
      <EventImage
        mediaUrl={context?.event?.mediaUrl}
        className="h-56 w-full object-contain"
      />
    </>
  );
}
