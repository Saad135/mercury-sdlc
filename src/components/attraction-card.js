import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function AttractionCard({ mediaUrl, title, id }) {
  return (
    <>
      {/* Card */}
      <div className="mx-2 mb-4 mt-2 border text-center shadow-lg sm:w-1/3 lg:w-1/4">
        {/* Card Image */}
        <div className="relative h-72 w-full">
          <img
            className="size-full object-cover"
            src={
              mediaUrl
                ? mediaUrl
                : "https://images.unsplash.com/photo-1501256504904-1fbe305bb538"
            }
            alt="photo"
          />
          {/* <Image
            className="size-full object-cover"
            src={
              mediaUrl
                ? mediaUrl
                : "https://images.unsplash.com/photo-1501256504904-1fbe305bb538"
            }
            alt="photo"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 50vw, 20vw"
            fill
          /> */}
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
