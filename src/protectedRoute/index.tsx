import { PropsWithChildren } from "react";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps extends PropsWithChildren {}

export function ProtectedRoute({children}: ProtectedRouteProps) {
    const {isAuthenticated} = useAuth()

    if(!isAuthenticated) {
        return <Navigate to={"/"} />
    }

    return children
}