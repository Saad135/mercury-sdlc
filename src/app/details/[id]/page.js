"use client";
import Container from "@/components/container";
import { useDetailsPageStates } from "@/components/details/details-provider";
import EventImage from "@/components/events/event-image";

export default function DetailsPage({ params }) {
  return (
    <>
      <Container>
        <HeroImage />

        <MainTitle />

        <div className="my-4">Hi {params?.id}</div>
      </Container>
    </>
  );
}

function MainTitle() {
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
