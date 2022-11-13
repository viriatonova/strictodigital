import React, { useState, useContext, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { MainPostsContext } from "../../context/MainPostsContext/MainPostsContext";
import PostCard from "./PostCard";

const MainPost = () => {
    const { state } = useContext(MainPostsContext);
    const [posts, setPosts] = useState([]);
    const [currentPage, SetCurrentPage] = useState(1);

    const listEnd = currentPage * state.limit;
    const listInit = listEnd - state.limit;

    useEffect(() => {
        setPosts(state.posts.slice(listInit, listEnd));
    }, [state]);

    return (
        <div className="main-post">
            <ul className="main-wrapper">
                {posts.map((post) => {
                    return (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.body}
                            image={faker.image.city(1280, 1280, true)}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default MainPost;
