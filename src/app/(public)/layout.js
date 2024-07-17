import HomeHeader from "@/components/home/home-header";
import HomeServer from "@/components/home/home-server";

export default function HomeLayout({ children }) {
  return (
    <>
      {/* Header */}
      <RootHeader />

      <RootMain>
        {/* Children */}
        {children}
      </RootMain>
    </>
  );
}

function RootHeader() {
  return (
    <>
      <HomeHeader />
    </>
  );
}

function RootMain({ children }) {
  return (
    <>
      <HomeServer>
        {/* Children */}
        {children}
      </HomeServer>
    </>
  );
}
