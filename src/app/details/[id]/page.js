import Container from "@/components/container";

export default function DetailsPage({ params }) {
  return (
    <>
      <Container>Hi: {params?.id}</Container>
    </>
  );
}
