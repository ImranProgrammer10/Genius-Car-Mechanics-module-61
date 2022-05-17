import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
 
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    
    // const signInUsingGoogle = (location, navigate) => {
       
    //     setIsLoading(true);
    //     signInWithPopup(auth, GoogleAuthProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             setUser(user.email, user.displayName, 'PUT');
    //             setAuthError('');
    //             const destination = location?.state?.from || '/';
    //             Navigate(destination);
    //         }).catch((error) => {
    //             setAuthError(error.message);
    //         }).finally(() => setIsLoading(false));
    // }


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setAuthError('');
                const destination = location?.state?.from || '/';
                Navigate(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;