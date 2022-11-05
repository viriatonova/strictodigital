import MainPostsList from "./MainPostsList";

const MainPosts = () => {
    return (
        <ul className="menu-tags">
            {menuTags.map((menu, index) => {
                return <TagsItens items={menu} key={index} />;
            })}
        </ul>
    );
};

export default MainPosts;
