import React from 'react'
import { Search } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next'
import { SpinnerCircular } from 'spinners-react';

function SearchBar({ callBack, isLoading }: { callBack: (e: string) => void, isLoading: boolean }) {

    const { t } = useTranslation();
    const [state, setState] = React.useState<string>();
    return (

        <form onSubmit={(e) => {
            e.preventDefault();
            callBack(state ?? "");
        }}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">{t("search")}</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-500 " />
                </div>
                <input type="search" id="default-search" onChange={(e) => setState(e.target.value)} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder={"Recherche transaction"} required={true} />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-4 py-2 "> <div className="flex space-x-3"> {isLoading && <SpinnerCircular enabled={isLoading} secondaryColor="transparent" thickness={200} speed={150} size={14} color={"#FFFF"} className="mr-3" />} <div>{"Recherche"}</div></div> </button>



            </div>
        </form>

    )
}

export default SearchBar







