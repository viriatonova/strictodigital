import { createContext, useReducer } from "react";
import { AuthReducer, AuthState } from "../reducers/AuthReducer";

export const AuthenticationContext = createContext();

// eslint-disable-next-line react/prop-types
export function HistoricoProvider({ children }) {
    const [state, dispatch] = useReducer(AuthReducer, AuthState);

    const loginUser = (payload) => dispatch({ type: "LOGIN_USER", payload });

    return (
        <AuthenticationContext.Provider value={{ state, loginUser }}>
            {children}
        </AuthenticationContext.Provider>
    );
}
