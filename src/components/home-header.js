import Link from "next/link";

import SignInButton from "./sigin-button";

export default function HomeHeader() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto mb-4 flex items-center justify-between p-4">
          <Link href="/">
            <p className="text-3xl font-semibold text-blue-800">Mercury</p>
          </Link>

          {/* Sign In button */}
          <SignInButton />
        </div>
      </div>
    </>
  );
}
