export default function SignInButton({ className, onClickHandler }) {
  return (
    <>
      <button onClick={onClickHandler} className={className}>
        Sign in
      </button>
    </>
  );
}
