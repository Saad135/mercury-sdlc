import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { ProfileHeader } from "@/components/profile/header";
import { authOptions } from "@/utils/auth";

export default function ProfileLayout({ children }) {
  return (
    <>
      <CheckAuthStatus>
        <ProfileHeader />

        {children}
      </CheckAuthStatus>
    </>
  );
}

async function CheckAuthStatus({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signin");
  }

  return <>{children}</>;
}
