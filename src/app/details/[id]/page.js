"use client";
import Link from "next/link";

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

        <LearnMoreLink />
      </Container>
    </>
  );
}

function LearnMoreLink() {
  const context = useDetailsPageStates();

  if (!context?.event?.permalink) {
    return <></>;
  }

  return (
    <>
      <Link
        className="my-4 rounded-xl bg-primary p-2 text-white hover:bg-primary/90 active:border active:border-primary active:bg-white active:text-primary"
        href={context?.event?.permalink}
        target="_blank"
      >
        Learn More
      </Link>
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
