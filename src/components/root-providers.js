import AppProvider from "./common-states-provider";

export default function Providers({ children }) {
  return (
    <>
      <AppProvider>{children}</AppProvider>
    </>
  );
}
