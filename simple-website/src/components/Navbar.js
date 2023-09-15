import React, {createContext, useState} from "react";
import {createBrowserRouter, Outlet, RouterProvider, useRoutes} from "react-router-dom";
import { FiMenu, FiChevronLeft } from "react-icons/fi";
import { NavbarList, Home } from "./index";

function Navbar() {
    const [ expanded, setExpanded ] = useState(false);

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <NavbarList expanded={ expanded ? 1 : 0 }/>,
            children: [
                { index: true, path:"/", element: <Home/>},
            ]
        }
    ]);

    return (
        <div>
            <nav className={"h-screen w-1/5 inline-block flex flex-col bg-white shadow-md"}
                 style={ expanded ? {} : { width: "fit-content" }  }
            >
                <div className="p-4 pb-2 h-24 flex justify-between items-center">
                    { expanded ? <h1 className="text-2xl text-white"> Surely How </h1> : null }
                    <button onClick={()=> setExpanded(curr => !curr)} className="p-1.5 rounded-lg">
                        { expanded ? <FiChevronLeft/> : <FiMenu /> }
                    </button>
                </div>

                <div>
                    <RouterProvider router={routes} />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;