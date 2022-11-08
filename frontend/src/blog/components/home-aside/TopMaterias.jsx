import { MainBLogPosts } from "../../../faker/posts";
import TopCard from "./TopCard";

const TopMaterias = () => {
    return (
        <div className="top">
            <h3 className="top-legenda">mais lidas</h3>
            <ul className="top-wrapper">
                {MainBLogPosts.map((post, index) => {
                    return (
                        <TopCard
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

export default TopMaterias;
