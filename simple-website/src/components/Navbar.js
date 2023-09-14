import React from "react";
import {createBrowserRouter, RouterProvider, useRoutes} from "react-router-dom";

function Navbar() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <div>HELLO</div>
        }
    ]);

    return (
        <div>
            <nav className="h-screen w-1/5 flex flex-col border-r shadow-sm">
                <div className="p4 pb-2 flex justify-between items-center">
                    <h1>Surely How</h1>
                    <button className="p-1.5">

                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;