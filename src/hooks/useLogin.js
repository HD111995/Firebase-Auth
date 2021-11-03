import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    const login = (email, password) => {
        setError(null)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Loggged in 
                // console.log(userCredential)
                // console.log('-------')
                const user = userCredential.user;
                // console.log('user is sign in', user)
                dispatch({ type: 'LOGIN', payload: user })
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return { error, login }
}