import { createContext } from "react"

export interface AuthContextType {
    user: User | null
    signIn: (user: User) => void
    signOut: () => void
    isAuthenticated: boolean
}

const defaultValue = {} as AuthContextType

export const AuthContext = createContext<AuthContextType>(defaultValue)