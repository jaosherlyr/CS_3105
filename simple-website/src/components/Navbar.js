import React from "react";
import {createBrowserRouter, RouterProvider, useRoutes} from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { NavbarList } from "./index";

function Navbar() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <NavbarList/>
        }
    ]);

    return (
        <div>
            <nav className="h-screen w-1/5 flex flex-col border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <h1>Surely How</h1>
                    <button className="p-1.5">
                        <FiMenu />
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