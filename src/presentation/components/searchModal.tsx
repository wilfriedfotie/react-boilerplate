
import React, { PropsWithChildren } from "react";

export const SearchModal: React.FC<PropsWithChildren<{ onClick: React.MouseEventHandler<HTMLDivElement> }>> = ({ onClick, children }) => {
    return <>

    
        <div id="defaultModal" onClick={onClick} aria-hidden="true" tabIndex={-1} className=" relative  ">
            <div onClick={(e) => {
                e.stopPropagation();
            }} className={ " bg-white rounded-lg px-5 py-2 shadow overflow-hidden absolute" }>
                {children}
            </div>

</div>
    </>
}

