import { Link } from "react-router-dom";
import { FiHome, FiFilm, FiMessageSquare } from "react-icons/fi";

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
                    <div>
                        <Link to={NavItems.link} className="relative flex items-center py-1 px-3 my-2 rounded-md
                            transition ease-in-out hover:text-vivid-violet-500 hover:bg-vivid-violet-100 hover:-translate-y-1 duration-150
                            ">
                            <li key={NavItems.id} className="font-medium text-lg text-vivid-violet-800 h-12 flex items-center">
                                {NavItems.icon}
                                { expanded ? <span className="w-1/5 ml-3 flex-1">{NavItems.text}</span> : null }
                            </li>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default NavbarList;