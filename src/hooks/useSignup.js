import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    const signup = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({ type: 'LOGIN', payload: user })
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return { error, signup }
}