import { menuTags } from "../../helpers/menuItens";
import TagsItens from "./TagsItens";

const MenuTags = () => {
    return (
        <ul className="menu-tags">
            {menuTags.map((menu, index) => {
                return <TagsItens items={menu} key={index} />;
            })}
        </ul>
    );
};

export default MenuTags;
