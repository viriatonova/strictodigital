import React, { useState } from "react";
import { MainBLogPosts } from "../../../faker/posts";
import PostCard from "./PostCard";

const MainPost = () => {
    const [posts, setPosts] = useState([]);

    return (
        <div className="main-post">
            <ul className="main-wrapper">
                {MainBLogPosts.map((post, index) => {
                    return (
                        <PostCard
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

export default MainPost;
