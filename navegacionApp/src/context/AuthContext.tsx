import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

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
    changeFavIcon: (iconName: string) => void;
    changeUserName: (iconName: string) => void;
    logout: () => void;
}

//Crear contexto
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const changeUserName = (username: string) => {
        dispatch({ type: 'changeUserName', payload: username })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavIcon,
            changeUserName,
        }}>
            {children}
        </AuthContext.Provider>)
}