"use client";
import { redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useRef, useState } from "react";

export default function SignInPage() {
  const { status } = useSession();
  if (status === "authenticated") {
    redirect("/");
  }

  return (
    <>
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      {/* Signin form */}
      <EmailLoginForm />
    </>
  );
}

function EmailLoginForm() {
  // Email input ref
  const emailInputRef = useRef();

  // button ref
  const buttonRef = useRef();

  // Button text state
  const [buttonText, setButtonText] = useState("Sign In");

  // On submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Perform signin
    console.log("emailinputval", emailInputRef.current?.value);
    signIn("email", { email: emailInputRef.current?.value, callbackUrl: "/" });

    // Disable buttton and set button text to loading
    buttonRef.current.disabled = true;
    setButtonText("Loading...");
  };
  return (
    <>
      <div className="w-full max-w-xs">
        <form
          onSubmit={onSubmitHandler}
          className="mb-4 rounded bg-white px-8 pb-8 pt-6"
        >
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="username"
            >
              Email
            </label>
            <input
              ref={emailInputRef}
              className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-primary focus:outline-none"
              id="email"
              type="email"
              placeholder="johndoe@example.com"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              ref={buttonRef}
              className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:shadow-primary focus:outline-none"
              type="submit"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
