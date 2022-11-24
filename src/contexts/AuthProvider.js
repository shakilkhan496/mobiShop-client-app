import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { getAuth, GoogleAuthProvider, signOut, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])



    const authInfo = {
        user,
        loading,
        emailLogin,
        googleLogin,
        logOut,
        createUser,
        setLoading,
        updateUserProfile
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;