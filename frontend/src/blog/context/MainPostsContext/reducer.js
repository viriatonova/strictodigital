export const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS": {
            return {
                ...state,
                posts: action.payload,
                loading: false,
                limit: action.limit,
                total: action.total(),
            };
        }
    }
    return { ...state };
};
