import React, { useState } from "react";
import {Link, Outlet} from "react-router-dom";
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
            <nav className={`h-auto min-h-screen min-w-fit flex-col shadow-md rounded-lg transition-all duration-100 bg-gradient-to-b from-royal-purple-400 to-royal-purple-700`} style={navStyle}>
                <div className="content sticky top-0 text-white">
                    <div className="p-5 pb-7 flex justify-between items-center font-bold">
                        { expanded ? <Link to="/" className="text-2xl transition-all hover:text-royal-purple-600"> Surely How </Link> : null }
                        <button onClick={()=> setExpanded(curr => !curr)} className="p-1.5 rounded-lg hover:text-royal-purple-600 transition-all">
                            { expanded ? <FiChevronLeft/> : <FiMenu /> }
                        </button>
                    </div>

                    <div>
                        <NavbarList expanded={ expanded ? 1 : 0 } />
                    </div>
                </div>
            </nav>

           <div className={`content px-5 py-3 transition-all duration-100`} style={contentStyle}>
               <Outlet />
           </div>
        </div>
    );
}

export default Navbar;