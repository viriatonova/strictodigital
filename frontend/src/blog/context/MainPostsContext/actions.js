import { data } from "./data";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const LoadMainPosts = async (dispatch) => {
    const request = await fetch(URL);
    const posts = await request.json();
    dispatch({
        type: "SUCCESS",
        payload: posts,
        limit: data.limit,
        total: function () {
            return posts.length;
        },
    });
};
