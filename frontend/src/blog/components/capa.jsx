import { faker } from "@faker-js/faker";

const Capa = () => {
    return (
        <section className="capa">
            <article className="capa-materia">
                <img src={faker.image.city(1280, 630, true)} alt="" />
                <h1 className="capa-titulo">
                    stricto digital renovando seu layout para o mundo
                </h1>
                <div className="capa-autor">
                    <p>por:</p>
                    <p>Marcos Improta</p>
                </div>
            </article>
        </section>
    );
};

export default Capa;
