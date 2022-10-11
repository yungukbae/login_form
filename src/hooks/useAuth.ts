import React from "react"
import { AuthContext } from "../context/AuthProvider"
export const useAuth = () => {
    return React.useContext(AuthContext)
}