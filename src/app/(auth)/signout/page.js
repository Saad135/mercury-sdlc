"use client";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function SignOutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    redirect("/");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/signin");
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        You have been signed out!
      </h2>
    </>
  );
}
