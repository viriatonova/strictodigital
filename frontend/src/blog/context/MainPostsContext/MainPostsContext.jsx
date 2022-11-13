import { createContext, useReducer, useRef, useEffect } from "react";
import { data } from "./data";
import { reducer } from "./reducer";
import { LoadMainPosts } from "./actions";

export const MainPostsContext = createContext();

// eslint-disable-next-line react/prop-types
export function MainPostsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, data);

    useEffect(() => {
        LoadMainPosts(dispatch);
    }, [dispatch]);

    return (
        <MainPostsContext.Provider value={{ state, dispatch }}>
            {children}
        </MainPostsContext.Provider>
    );
}
