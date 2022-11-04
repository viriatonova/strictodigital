import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const MenuItens = ({ items }) => {
    const [isShow, setIsShow] = useState(false);
    let location = useLocation();
    return (
        <li
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            {items.submenu ? (
                <>
                    <NavLink
                        className={
                            location.pathname === `/cti/${items.url}`
                                ? "stricto-link text-skin-highlight"
                                : "stricto-link"
                        }
                        to={items.url}
                    >
                        {items.title}
                    </NavLink>
                    {isShow && <MenuDropdown submenus={items.submenu} />}
                </>
            ) : (
                <NavLink
                    className={
                        location.pathname === `/cti/${items.url}`
                            ? "stricto-link text-skin-highlight"
                            : "stricto-link"
                    }
                    to={items.url}
                >
                    {items.title}
                </NavLink>
            )}
        </li>
    );
};

export default MenuItens;
