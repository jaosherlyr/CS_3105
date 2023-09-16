import {Link, useRouteError} from "react-router-dom";

function Error() {
    const error = useRouteError();

    return (
        <div className="text-center min-h-screen flex flex-col justify-center">
            <h1 className="text-9xl font-extrabold pb-10 text-royal-purple-800">Oops!</h1>
            <p className="text-royal-purple-600">Sorry, an unexpected error has occurred</p>

            <p className="text-royal-purple-400">
                <i>{error.statusText || error.message}</i>
            </p>

            <div className="px-4 py-3 mt-8 rounded-md text-white bg-royal-purple-500 hover:bg-royal-purple-600 transition-all w-fit self-center">
                <Link to="/">
                    Return to Home Page
                </Link>
            </div>
        </div>
    );
}

export default Error;