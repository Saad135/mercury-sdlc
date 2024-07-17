import { useRouter } from "next/navigation";

import SignInButton from "../sigin-button";
import HomeLogo from "./home-logo";

export default function HomeHeader() {
  return (
    <>
      <HeaderBase>
        <HeaderLogo />

        <HeaderSignIn />
      </HeaderBase>
    </>
  );
}

export function HeaderBase({ children }) {
  return (
    <>
      <div className="w-full bg-white">
        <div className="container mx-auto mb-4 flex items-center justify-between p-4">
          {children}
        </div>
      </div>
    </>
  );
}

function HeaderSignIn() {
  const router = useRouter();

  return (
    <>
      <SignInButton
        onClickHandler={() => {
          router.push("/profile");
        }}
        className={
          "rounded-full border border-primary bg-primary p-2 text-white shadow hover:bg-primary/90 hover:shadow-sm active:bg-white active:text-primary"
        }
      />
    </>
  );
}

// eslint-disable-next-line unused-imports/no-unused-vars
function SignInButtonForSmallScreens() {
  return (
    <>
      {/* Signin button showing up at the bottom for small screens */}
      <div className="absolute inset-x-0 bottom-0 z-50 my-10 px-4 sm:relative sm:z-0 sm:my-0 sm:px-4">
        {/* Sign In button */}
        <SignInButton
          className={
            "w-full rounded-full border border-primary bg-primary p-2 text-white shadow shadow-primary-lighter hover:shadow-sm active:bg-white active:text-primary sm:bg-white sm:text-primary sm:active:bg-primary sm:active:text-white"
          }
        />
      </div>
    </>
  );
}

function HeaderLogo() {
  return (
    <>
      <HomeLogo />
    </>
  );
}
