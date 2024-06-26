import HomeLogo from "./home-logo";
import SignInButton from "./sigin-button";

export default function HomeHeader() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto mb-4 flex items-center justify-between p-4">
          <HomeLogo />

          {/* Sign In button */}
          <SignInButton
            className={
              "rounded-full border border-blue-800 p-2 text-blue-800 shadow shadow-blue-200 hover:shadow-sm active:bg-blue-800 active:text-white"
            }
          />
        </div>
      </div>
    </>
  );
}
