import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        console.log('Check your context provider')
    }
    return context
}