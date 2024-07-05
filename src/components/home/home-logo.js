import Link from "next/link";

export default function HomeLogo() {
  return (
    <>
      <Link href="/">
        <p className="text-3xl font-semibold text-primary">Mercury</p>
      </Link>
    </>
  );
}
