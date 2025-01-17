"use client";
import Link from "next/link";

import { useCommonAppStates } from "@/components/common-states-provider";
import Container from "@/components/container";
import { useDetailsPageStates } from "@/components/details/details-provider";
import EventImage from "@/components/events/event-image";
import ToggleSelection from "@/components/events/toggle-save";
import MainDiv from "@/components/main-div";

export default function DetailsPage() {
  return (
    <>
      <DetailsMain>
        <HeroImage />

        <EventTitle />

        <ToggleButton />

        <EventDescription />

        <LearnMoreLink />
      </DetailsMain>
    </>
  );
}

function ToggleButton() {
  const detailsContext = useDetailsPageStates();
  const commonStatesContext = useCommonAppStates();

  const toggleHandler = () => {
    commonStatesContext?.toggleSavedEventArr(detailsContext?.event);
  };

  return (
    <>
      <ToggleSelection
        clickCallback={toggleHandler}
        isActive={commonStatesContext?.savedEventArr?.some(
          (event) => event?.id === detailsContext?.event?.id,
        )}
        showToggleDesc
        extraClassnames="border border-primary"
      />
    </>
  );
}

function DetailsMain({ children }) {
  return (
    <>
      <MainDiv>
        <Container>{children}</Container>
      </MainDiv>
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
