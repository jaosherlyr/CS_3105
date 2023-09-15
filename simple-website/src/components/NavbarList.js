import {Link, Outlet} from "react-router-dom";
import {FiHome, FiFilm, FiMessageSquare} from "react-icons/fi";

const NavItems = [
    {
        id: 1,
        link: '/',
        icon: <FiHome/>,
        text: 'Home'
    },
    {
        id: 2,
        link: '/works',
        icon: <FiFilm/>,
        text: 'Gallery'
    },
    {
        id: 3,
        link: '/contact',
        icon: <FiMessageSquare/>,
        text: 'Contact Me'
    }
];

function NavbarList({ expanded }) {
    return (
        <div>
            <ul className="flex-1 px-3">
                {NavItems.map((NavItems) => (
                    <li key={NavItems.id} className="font-medium text-lg h-12 flex items-center">
                        <Link to={NavItems.link}
                              className="
                      relative flex items-center py-7 px-3 my-1 cursor-pointer
                      transition ease-in-out hover:-translate-y-1 hover:text-vivid-violet-500 duration-150
                      active:text-vivid-violet-500 active:bg-vivid-100
                ">
                            {NavItems.icon}
                            { expanded ? <span className="w-1/5 ml-3 flex-1">{NavItems.text}</span> : null }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavbarList;