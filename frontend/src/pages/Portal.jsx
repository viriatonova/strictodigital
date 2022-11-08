import NavPrincipal from "../blog/components/navs/NavPrincipal";
import Capa from "../blog/components/capa";
import NavTags from "../blog/components/navs/NavTags";
import MainPosts from "../blog/components/home-posts/MainPosts";
import CallApoio from "../blog/components/home-aside/CallApoio";
import FooterBlog from "../blog/components/Footer";
import Colunas from "../blog/components/home-aside/Colunas";
import Ranking from "../blog/components/Ranking";

const Portal = () => {
    return (
        <main>
            <NavPrincipal />
            <Capa />
            <NavTags />
            <div className="portal-main-posts">
                <section className="">
                    <MainPosts />
                </section>
                <aside>
                    <CallApoio />
                    <Colunas />
                    <Ranking />
                </aside>
            </div>
            <FooterBlog />
        </main>
    );
};

export default Portal;
