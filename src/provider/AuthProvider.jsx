import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { Auth } from '../firebase/firebase.config'
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(Auth, email, pass)
    }

    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(Auth, email, pass)
    }
    // const signOut = () => {
    //     return signOut(Auth)
    // }

    const authInfo = {
        user,
        setUser,
        setLoading,
        loading,
        createUser,
        loginUser,
        // signOut,
    }

    useEffect(() => {
        const sub = onAuthStateChanged(Auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            sub()
        }
    }, [])
    return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvider
