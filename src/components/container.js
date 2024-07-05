export default function Container({ className, children }) {
  return (
    <>
      <div
        className={
          className
            ? className
            : "my-2 rounded-xl bg-white p-4 shadow sm:container sm:mx-auto"
        }
      >
        {children}
      </div>
    </>
  );
}
