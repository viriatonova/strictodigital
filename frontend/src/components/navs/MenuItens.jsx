import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

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
                                ? "cam-link text-skin-highlight"
                                : "cam-link"
                        }
                        to={items.url}
                    >
                        {items.title}
                    </NavLink>
                    {/* {isShow && <MenuDropdown submenus={items.submenu} />} */}
                </>
            ) : (
                <NavLink
                    className={
                        location.pathname === `/cti/${items.url}`
                            ? "cam-link text-skin-highlight"
                            : "cam-link"
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
