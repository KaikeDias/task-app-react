import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/authContext";

export const useAuth = (): AuthContextType => {
    const authContext = useContext(AuthContext)

    if(!AuthContext) {
        throw new Error('useAuth fora do AuthProvider')
    }

    return authContext
}