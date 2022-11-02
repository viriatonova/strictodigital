import MenuItens from "./MenuItens";
import { menuItems } from "../../helpers/principalItems";

const MenuPrincipal = () => {
    return (
        <ul>
            {menuItems.map((menu, index) => {
                return <MenuItens items={menu} key={index} />;
            })}
        </ul>
    );
};

export default MenuPrincipal;
