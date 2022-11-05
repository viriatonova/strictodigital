import NavPrincipal from "../blog/components/navs/NavPrincipal";
import Capa from "../blog/components/capa";
import NavTags from "../blog/components/navs/NavTags";

const Portal = () => {
    return (
        <main>
            <NavPrincipal />
            <Capa />
            <NavTags />
            <div className="blog-wrapper"></div>
        </main>
    );
};

export default Portal;
