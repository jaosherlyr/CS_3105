import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu, FiChevronLeft } from "react-icons/fi";
import { NavbarList } from "./index";

function Navbar() {
    const [ expanded, setExpanded ] = useState(false);
    const navStyle = {
        width: expanded ? '280px' : '66px',
    }
    const contentStyle = {
        width: `calc(100% - ${ expanded ? '280px' : '66px' })`,
    }

    return (
        <div className="flex">
            <nav className={`h-auto min-h-screen min-w-fit flex-col bg-vivid-violet-200 shadow-md rounded-lg transition-all`} style={navStyle}>
                <div className="p-4 pb-2 flex justify-between items-center text-vivid-violet-800 font-bold">
                    { expanded ? <h1 className="text-2xl"> Surely How </h1> : null }
                    <button onClick={()=> setExpanded(curr => !curr)} className="p-1.5 rounded-lg ">
                        { expanded ? <FiChevronLeft/> : <FiMenu /> }
                    </button>
                </div>

                <div>
                    <NavbarList expanded={ expanded ? 1 : 0 } />
                </div>
            </nav>

           <div className={`content px-5 py-3 transition-all`} style={contentStyle}>
               <Outlet />
           </div>
        </div>
    );
}

export default Navbar;