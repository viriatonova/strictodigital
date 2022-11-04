import { token } from "../helpers/getAuthentication";

export const AuthState = { user: "", token: "" };

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER": {
            const requestToken = token;
            return {
                ...state,
                user: "user",
                token: requestToken,
                // No payload podemos passar via o componente o ID ou qualquer dado do usuário.
                payload: action.payload,
            };
        }
        case "CHECK_USER_LOGGER": {
            console.log("check user logged");
        }
    }
    return { ...state };
};
