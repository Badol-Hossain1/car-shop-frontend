import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import { Auth } from '../firebase/firebase.config'
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(Auth, email, pass)
    }
    const authInfo = {
        user,
        setUser,
        setLoading,
        loading,
        createUser,
    }
    return <AuthContext value={authInfo}>{children}</AuthContext>
}

export default AuthProvider
