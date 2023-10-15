import { PropsWithChildren, useMemo, useState } from "react";
import { AuthContext } from "../context/authContext";

interface AuthProviderProps extends PropsWithChildren {}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null)

    const signIn = (user: User) => {setUser(user)}

    const signOut = () => {setUser(null)}

    const value = useMemo(() => ({
        user, signIn, signOut, isAuthenticated: user !== null
    }), [user])

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}