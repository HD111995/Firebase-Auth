import { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../firebase/config";

export const AuthContext = createContext()

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            console.log('reducer login')
            console.log('action', action)
            return { ...state, user: action.payload }
            break;
        case 'LOGOUT':
            console.log(action)
            return { ...state, user: null }
            break;
        case 'CHECK_IF_READY':
            console.log(action)
            return { ...state, user: action.payload, appReady: true }
            break;
        default:
            break;
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { user: null, appReady: false });

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            dispatch({ type: 'CHECK_IF_READY', payload: user })
            unsub()
        })
    }, []);

    console.log('AuthContext State:', state)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}