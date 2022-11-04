import MenuSecundario from "./navs/MenuSecundario";
import { faker } from "@faker-js/faker";

const Capa = () => {
    return (
        <section className="capa">
            <article className="capa-materia">
                <img src={faker.image.city(1920, 1080, true)} alt="" />
                <h1 className="capa-titulo">
                    stricto digital renovando seu layout para o mundo
                </h1>
            </article>
            <MenuSecundario />
        </section>
    );
};

export default Capa;
