import { MainBLogPosts } from "../../../faker/posts";
import ColunasCard from "./ColunasCard";

const Colunas = () => {
    return (
        <div className="colunas">
            <ul className="colunas-wrapper">
                {MainBLogPosts.map((post, index) => {
                    return (
                        <ColunasCard
                            key={index}
                            id={index}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Colunas;
