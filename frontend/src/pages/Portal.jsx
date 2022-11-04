import NavPrincipal from "../blog/components/navs/NavPrincipal";
import Capa from "../blog/components/capa";

const Portal = () => {
    return (
        <main>
            <NavPrincipal />
            <div className="blog-wrapper">
                <Capa />
            </div>
        </main>
    );
};

export default Portal;
