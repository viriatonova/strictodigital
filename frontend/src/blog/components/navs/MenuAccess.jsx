import { menuAccessItems } from "../../helpers/menuItens";

const MenuAccess = () => {
    return (
        <ul className="menu-access">
            {menuAccessItems.map((menu, index) => {
                return (
                    <li key={index}>
                        <a className="access-link" href={menu.url}>
                            {menu.title}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default MenuAccess;
