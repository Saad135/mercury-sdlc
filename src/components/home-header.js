import HomeLogo from "./home-logo";
import SignInButton from "./sigin-button";

export default function HomeHeader() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto mb-4 flex items-center justify-center p-4 sm:justify-between">
          <HomeLogo />

          {/* Sign In button */}
          <SignInButton
            className={
              "hidden rounded-full border border-primary p-2 text-primary shadow shadow-primary-lighter hover:shadow-sm active:bg-primary active:text-white sm:block"
            }
          />
        </div>
      </div>
    </>
  );
}
