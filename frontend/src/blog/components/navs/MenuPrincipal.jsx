import MenuItens from "./MenuItens";
import { menuPrincipalItems } from "../../helpers/menuItens";

const MenuPrincipal = () => {
    return (
        <ul className="menu-principal">
            {menuPrincipalItems.map((menu, index) => {
                return <MenuItens items={menu} key={index} />;
            })}
        </ul>
    );
};

export default MenuPrincipal;
