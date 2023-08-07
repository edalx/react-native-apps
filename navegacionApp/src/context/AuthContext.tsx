import React, { createContext } from "react";

export interface AuthState {
    isLoggegIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
    isLoggegIn: false
}

//Se usa para decirle a React cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

//Crear contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {
    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => { }
        }}>
            {children}
        </AuthContext.Provider>)
}