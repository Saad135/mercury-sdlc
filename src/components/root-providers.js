"use client";
import { SessionProvider } from "next-auth/react";

import AppProvider from "./common-states-provider";

export default function Providers({ children }) {
  return (
    <>
      <SessionProvider>
        <AppProvider>{children}</AppProvider>
      </SessionProvider>
    </>
  );
}
