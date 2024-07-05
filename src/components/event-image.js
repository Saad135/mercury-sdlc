/* eslint-disable @next/next/no-img-element */
export default function EventImage({ mediaUrl }) {
  return (
    <>
      <img
        className="size-full object-cover"
        src={
          mediaUrl
            ? mediaUrl
            : "https://images.unsplash.com/photo-1501256504904-1fbe305bb538"
        }
        alt="photo"
      />
    </>
  );
}
