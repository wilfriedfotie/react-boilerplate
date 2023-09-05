import React, { PropsWithChildren } from "react";
import { SpinnerCircular } from "spinners-react/lib/esm/SpinnerCircular";

type PrimaryButton = PropsWithChildren<{
  isLoading?: boolean;
  isForm?: boolean;
  isError?: boolean;
  className?: string | undefined,
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}>;

function Button({ isLoading = false, isForm = false, onClick = undefined, isError = false, className, disabled = false, children }: PrimaryButton) {
  return (
        <button
            type="submit"
            onClick={isForm || disabled ? undefined : onClick}
            className={disabled ? "rounded-lg  bg-slate-200 hover:bg-gray-500 px-10 py-3 w-full text-white" : !isError ? " rounded-lg  w-full bg-green-950 hover:bg-green-800  px-10 py-3 text-white " + className : "  px-4 py-2 bg-green-950 rounded-lg w-full text-white " + className} >
          <div className="flex flex-1 justify-center items-center" > <SpinnerCircular enabled={isLoading} secondaryColor="transparent" thickness={200} speed={150} size={20} color={"#FFFF"} className="mr-3" /> {children} </div>
        </button>
  );
}

export default Button;



