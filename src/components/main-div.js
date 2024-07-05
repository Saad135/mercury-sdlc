export default function MainDiv({ children, className }) {
  return (
    <>
      <div className={className ? className : "grow overflow-auto pb-20"}>
        {children}
      </div>
    </>
  );
}
