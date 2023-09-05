import React from 'react'
import {  ChevronDown } from 'react-bootstrap-icons';

function Dropdown({ data, handleChange }: { data: string[], handleChange:  (e: string)=> void }) {
    
    const [state, setState] = React.useState<boolean>(false);

    const [dropData, setDropSelected] = React.useState<string>(data && data[0]);
    return (
        <div className='relative border-red-900'>
            <button id="dropdownDefault" onClick={() => data.length > 0 ? setState(s => !s) : null} data-dropdown-toggle="dropdown" className="text-whitefocus:ring-4  focus:outline-none focus:ring-red-900  font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center justify-evenly  border min-w-[200px] border-red-300" type="button"> {dropData} <ChevronDown />  </button>
            <div id="dropdown" className={state ? "absolute z-4 w-44 bg-white rounded min-w-[200px] divide-y divide-gray-100 shadow " : "hidden z-10 w-44 bg-white min-w-[200px] rounded divide-y divide-gray-100 shadow "} data-popper-placement="bottom" >
                <ul className="py-1 text-sm text-gray-700 " aria-labelledby="dropdownDefault">
                    {
                        data.map((item, index) => {
                            return (<li key={index} onClick={() => {
                                console.log(item)
                                setDropSelected(item);
                                handleChange(item);
                                setState(false);
                            }}>
                                <a href="#" className={dropData === item ? "block text-red-900 py-2 px-4 hover:bg-gray-100  " : "block py-2 px-4 hover:bg-gray-100  "} >{item} </a>
                            </li>)
                        })
                    }


                </ul>
            </div>
        </div>
    )
}

export default Dropdown