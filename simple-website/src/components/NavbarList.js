import { Link } from "react-router-dom";
import { FiHome, FiFilm } from "react-icons/fi";

const NavItems = [
    {
        link: '/home',
        icon: <FiHome/>,
        text: 'Home'
    },
    {
        link: '/works',
        icon: <FiFilm/>,
        text: 'Gallery'
    }
];

function NavbarList() {
    return (
        <ul className="flex-1 px-3">
            {NavItems.map((NavItems) => (
                <li>
                    <Link to={NavItems.link}
                          className="
                      relative flex items-center py-2 px-3 my-1 cursor-pointer
                      transition ease-in-out hover:-translate-y-1 hover:text-indigo-500 duration-300
                      active:text-indigo-500
                ">
                        {NavItems.icon}
                        <span className="w-1/5 ml-3">{NavItems.text}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default NavbarList;