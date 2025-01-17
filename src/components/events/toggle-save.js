"use client";

import { useState } from "react";

import { CheckMark, PlusSign, Spinner } from "../ui/icons";

export default function ToggleSelection({
  showToggleDesc = false,
  extraClassnames = "",
  isActive,
  clickCallback,
}) {
  // is Loading state
  const [isLoading, setIsLoading] = useState();

  const handleClick = async ({ clickCallback }) => {
    setIsLoading(true);

    if (clickCallback) {
      await clickCallback();
    }

    setIsLoading(false);
  };

  return (
    <>
      <button
        type="button"
        disabled={isLoading}
        onClick={() => handleClick({ clickCallback: clickCallback })}
        className={`m-1 flex cursor-pointer justify-center rounded-full p-2 shadow ${
          !isActive
            ? "bg-white text-primary active:bg-primary active:text-white"
            : "bg-primary text-white active:bg-white active:text-primary"
        } ${extraClassnames}`}
      >
        {isLoading ? <Spinner /> : !isActive ? <PlusSign /> : <CheckMark />}
        {showToggleDesc && <span>{!isActive ? "Add" : "Remove"}</span>}
      </button>
    </>
  );
}
