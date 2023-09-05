
import React, { PropsWithChildren } from "react";

export const Modal: React.FC<PropsWithChildren<{ onClick: React.MouseEventHandler<HTMLDivElement>, isBig: boolean }>> = ({ onClick, children, isBig = false }) => {
    return <>
        <div id="defaultModal" onClick={onClick} aria-hidden="true" tabIndex={-1} className="  flex justify-center items-center z-50  bg-gray-200/70  top-0 left-0 fixed h-screen w-screen ">




            <div onClick={(e) => {
                e.stopPropagation();
            }} className={isBig ? " bg-white rounded-lg shadow p-4 overflow-hidden flex items-center justify-center" : " bg-white rounded-lg shadow p-4 w-2/3 h-[80%] "}>


                {children}

            </div>

        </div>

    </>
}

