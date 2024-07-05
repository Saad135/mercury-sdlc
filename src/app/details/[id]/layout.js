import DetailsServer from "@/components/details/details-server";

export default function DetailsLayout({ params, children }) {
  return (
    <>
      <DetailsMain id={params?.id}>{children}</DetailsMain>
    </>
  );
}

function DetailsMain({ id, children }) {
  return (
    <>
      <div>
        <DetailsServer id={id}>{children}</DetailsServer>
      </div>
    </>
  );
}
