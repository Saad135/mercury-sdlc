import Link from "next/link";

export default function HomeHeader() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto mb-4 flex items-center justify-between p-4">
          <Link href="/">
            <p className="text-3xl font-semibold text-blue-800">Mercury</p>
          </Link>

          {/* Sign In button */}
          <div>
            <button className="rounded-full border border-blue-800 p-2 text-blue-800 shadow shadow-blue-200 hover:shadow-sm active:bg-blue-800 active:text-white">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
