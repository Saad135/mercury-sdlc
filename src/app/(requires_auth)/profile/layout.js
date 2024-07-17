import { ProfileHeader } from "@/components/profile/header";

export default function ProfileLayout({ children }) {
  return (
    <>
      <ProfileHeader />

      {children}
    </>
  );
}
