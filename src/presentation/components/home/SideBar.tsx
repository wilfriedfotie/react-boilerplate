import {BoxArrowLeft, HouseGear,} from "react-bootstrap-icons"
import React, {PropsWithChildren, ReactNode} from "react"
import {UserPorps} from "../../../data/models";
import {useLocation, useNavigate,} from "react-router-dom";
import {STRING_ROUTE_HOME, STRING_ROUTE_OUT} from "../../utils/const.ts";

export const NavBar: React.FC<{ user?: UserPorps }> = ({user}) => {

    const route = useNavigate()
    const location = useLocation();

    const handleChangePage = (index: number) => {
        switch (index) {
            case 0:{
                route(STRING_ROUTE_HOME);
                break;
            }
            case 2:
            {
                route(STRING_ROUTE_OUT);
                break;
            }
        }
    }

    return (
        <div
            className="   lg:w-[20vw] lg:h-[100vh] bg-white  fixed z-100000 max-sm:max-lg:bottom-0 sm:bottom-0  max-sm:max-lg:border-t sm:border-t max-sm:max-lg:w-full sm:w-full flex flex-col   lg:px-10 lg:border-r-2">

            <div className="flex-1 max-sm:max-lg:flex max-sm:max-lg:justify-evenly sm:justify-evenly sm:flex lg:block">

                <div className="text-center text-3xl text-green-950 mb-7 font-bold max-sm:max-lg:hidden">Kamix MOMO
                    SERVICE
                </div>


                <NavBarItem title="Dasboard" icon={<HouseGear/>} isActive={location.pathname == STRING_ROUTE_HOME} index={0}
                            onClick={handleChangePage}/>
                <NavBarItem title="Logout" icon={<BoxArrowLeft/>} isActive={location.pathname == STRING_ROUTE_OUT} index={2}
                            onClick={handleChangePage}/>

            </div>
            {user && <div className="flex space-x-4 max-sm:max-lg:hidden sm:hidden lg:flex items-center py-4 mx-4">

                <div
                    className="overflow-hidden rounded-full h-10 flex items-center justify-center w-10 border bg-green-900">
                    <span className="font-bold text-xl  text-white">{user.email.substring(0, 1)}</span>
                </div>
                <span>
                    {user.email}
                </span>

            </div>}

        </div>
    )
}

export const NavBarItem: React.FC<PropsWithChildren<{
    icon: ReactNode,
    index: number,
    title: string,
    isActive?: boolean,
    onClick: (index: number) => void
}>> = ({icon, title, isActive = false, onClick, index}) => {
    return (
        <div onClick={() => onClick(index)}
             className={`flex items-center max-sm:max-lg:justify-evenly sm:justify-evenly lg:justify-start  px-4 mx-2 my-5 py-3 space-x-4 hover:cursor-pointer ${isActive ? "bg-green-950 text-white rounded-xl" : null}`}>

            {icon}

            <span className="max-sm:max-lg:hidden sm:hidden lg:block">{title}</span>
        </div>
    )
}
