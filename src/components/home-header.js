import HomeLogo from "./home-logo";
import SignInButton from "./sigin-button";

export default function HomeHeader() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto mb-4 flex items-center justify-between p-4">
          <HomeLogo />

          {/* Sign In button */}
          <SignInButton />
        </div>
      </div>
    </>
  );
}
