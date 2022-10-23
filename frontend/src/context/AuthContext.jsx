import { createContext, useState, useCallback, useEffect } from "react";
import { token } from "../helpers/getAuthentication";

export const AuthenticationContext = createContext();

// eslint-disable-next-line react/prop-types
export function HistoricoProvider({ children }) {
    const [getToken, setGetToken] = useState([]);

    const handleToken = useCallback(() => {
        const requestToken = token;
        setGetToken(requestToken);
    }, []);

    useEffect(() => {
        handleToken();
    }, [handleToken]);

    return (
        <AuthenticationContext.Provider value={{ getToken, setGetToken }}>
            {children}
        </AuthenticationContext.Provider>
    );
}
