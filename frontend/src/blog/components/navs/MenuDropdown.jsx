import { NavLink, useLocation } from "react-router-dom";

const MenuDropdown = ({ submenus }) => {
    let location = useLocation();

    return (
        <ul className="dropdown">
            {submenus.map((submenu, index) => (
                <li key={index}>
                    <NavLink
                        className={
                            location.pathname === `/cti/${submenu.url}`
                                ? "cam-link text-skin-highlight"
                                : "cam-link"
                        }
                        to={submenu.url}
                    >
                        {submenu.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default MenuDropdown;
