import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate, useLocation } from 'react-router'

const Private = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext)
    if (user?.email) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default Private
