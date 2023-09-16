import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu, FiChevronLeft } from "react-icons/fi";
import { NavbarList } from "./index";

function Navbar() {
    const [ expanded, setExpanded ] = useState(false);

    return (
        <div className="flex">
            <nav className={"h-screen w-1/6 flex-col bg-vivid-violet-200 shadow-md rounded-lg"}
                 style={ expanded ? {} : { width: "fit-content" }  }
            >
                <div className="p-4 pb-2 h-24 flex justify-between items-center text-vivid-violet-800 font-bold">
                    { expanded ? <h1 className="text-2xl"> Surely How </h1> : null }
                    <button onClick={()=> setExpanded(curr => !curr)} className="p-1.5 rounded-lg ">
                        { expanded ? <FiChevronLeft/> : <FiMenu /> }
                    </button>
                </div>

                <div>
                    <NavbarList expanded={ expanded ? 1 : 0 } />
                </div>
            </nav>

           <div className="outlet">
               <Outlet />
           </div>
        </div>
    );
}

export default Navbar;