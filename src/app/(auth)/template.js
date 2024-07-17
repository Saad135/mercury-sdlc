import HomeLogo from "@/components/home/home-logo";

export default function Template({ children }) {
  return (
    <div className="flex h-screen flex-col justify-around overflow-hidden">
      <div className="flex justify-around">
        <div className="rounded-lg bg-white p-8 shadow-sm">
          <div className="relative mx-auto h-10 w-auto">
            <HomeLogo />
          </div>
          {/* <img
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
