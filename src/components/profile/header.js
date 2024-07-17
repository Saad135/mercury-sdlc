"use client";
import { signOut } from "next-auth/react";

import { HeaderBase } from "../home/home-header";
import HomeLogo from "../home/home-logo";
import { BaseButton } from "../sigin-button";

export function ProfileHeader() {
  return (
    <>
      <HeaderBase>
        <HomeLogo />

        <ProfileSignOut />
      </HeaderBase>
    </>
  );
}

function ProfileSignOut() {
  return (
    <>
      <BaseButton
        btnText={"Sign Out"}
        className={
          "rounded-full border border-primary bg-primary p-2 text-white shadow hover:bg-primary/90 hover:shadow-sm active:bg-white active:text-primary"
        }
        onClickHandler={() => signOut({ callbackUrl: "/signout" })}
      />
    </>
  );
}
