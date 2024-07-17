export default function SignInButton({ className, onClickHandler }) {
  return (
    <>
      <BaseButton
        btnText={"Sign In"}
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
