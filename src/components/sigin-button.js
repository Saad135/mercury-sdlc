export default function SignInButton({ btnText, className, onClickHandler }) {
  return (
    <>
      <BaseButton
        btnText={btnText ? btnText : "Sign In"}
        className={className}
        onClickHandler={onClickHandler}
      />
    </>
  );
}

export function BaseButton({ className, onClickHandler, btnText }) {
  return (
    <>
      <button onClick={onClickHandler} className={className}>
        {btnText}
      </button>
    </>
  );
}
