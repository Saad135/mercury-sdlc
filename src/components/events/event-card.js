import Link from "next/link";

import EventImage from "./event-image";

/* eslint-disable @next/next/no-img-element */
export default function EventCard({ mediaUrl, title, id }) {
  return (
    <>
      {/* Card */}
      <div className="mx-2 mb-4 mt-2 border text-center shadow-lg sm:w-1/3 lg:w-1/4">
        {/* Card Image */}
        <div className="relative h-72 w-full">
          <CardImage mediaUrl={mediaUrl} />
        </div>

        {/* Card title */}
        <Link href={id ? "/details/" + id : "/#"}>
          <div className="w-full">
            <p className="my-2 cursor-pointer text-xl font-medium text-primary hover:underline">
              {title ? title : "Exciting Event"}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

function CardImage({ mediaUrl }) {
  return (
    <>
      <EventImage mediaUrl={mediaUrl} />
    </>
  );
}
