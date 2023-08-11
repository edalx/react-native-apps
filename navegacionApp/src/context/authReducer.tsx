import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logout' }
    | { type: 'changeUserName', payload: string }
    | { type: 'changeFavIcon', payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggegIn: true,
                username: 'no-username-yet'
            }
        case 'logout':
            return {
                ...state,
                isLoggegIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case 'changeUserName':
            return {
                ...state,
                username: action.payload
            }
        case "changeFavIcon":
            return {
                ...state,
                favoriteIcon: action.payload
            }
        default:
            return state
    }
}