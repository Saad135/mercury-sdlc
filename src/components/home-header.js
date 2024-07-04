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

        {/* Sign in button for smaller screens */}
        {/* Signin button showing up at the bottom for small screens */}
        <div className="absolute inset-x-0 bottom-0 z-50 my-10 px-4 sm:hidden">
          <SignInButton
            className={
              "w-full rounded-full border border-primary bg-primary p-2 text-white shadow shadow-primary-lighter hover:shadow-sm active:bg-white active:text-primary"
            }
          />
        </div>
      </div>
    </>
  );
}
