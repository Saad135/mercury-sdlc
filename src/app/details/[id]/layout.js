export default function DetailsLayout({ params, children }) {
  return (
    <>
      <DetailsMain>{children}</DetailsMain>
    </>
  );
}

function DetailsMain({ children }) {
  return (
    <>
      {/* <HomeServer>
          {children}
        </HomeServer> */}
      <div>
        {/* Children */}
        {children}
      </div>
    </>
  );
}
