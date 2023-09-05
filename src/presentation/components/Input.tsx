import React, { useState} from "react";
import {EyeFill, EyeSlashFill} from "react-bootstrap-icons";


type InputProps = React.ComponentPropsWithoutRef<"input">;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {
    const [passwordVisible, setPassVisible] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);

    const handleFocus = ( e: React.FocusEvent<HTMLDivElement, Element>) => {
        if (e?.currentTarget !== e?.target) {
            setFocus(true);
        }
    }

    const handleBlur = ( e: React.FocusEvent<HTMLDivElement, Element>) => {
        if (e?.currentTarget !== e?.target) {
            setFocus(false);
        }
    }


    return (
        <>
            <div className="mt-4 mb-2" tabIndex={1}
                 onFocus={handleFocus}
                 onBlur={handleBlur}>
                <div className="flex justify-center items-center space-x-4 ">
                    <div
                        className={focus ? " border-green-800 ring-green-800 ring-1 bg-white w-full border rounded-md px-4 py-3 shadow-sm  sm:text-sm flex justify-center items-center" : "  bg-white w-full border border-slate-300 rounded-md px-4 py-3 shadow-sm  sm:text-sm flex justify-center items-center"}
                    >
                        <input
                            className="flex-1 focus:outline-none"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                console.log(e)
                            }}

                            {...props}
                            ref={ref} type={passwordVisible ? "text" : props.type}/>
                        {props.type == "password" && <div onClick={() => setPassVisible((s) => !s)}>

                            {passwordVisible ? (
                                <EyeFill size={18} color="gray"/>
                            ) : (
                                <EyeSlashFill size={18} color="gray"/>
                            )}
                        </div>} </div>
                </div>
            </div>
        </>

    )
})

export default Input;












