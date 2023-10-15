import { useRef } from "react"
import { useAuth } from "../../hook/useAuth"
import { Navigate } from "react-router-dom"

interface LoginProps {
    next?: string
}

export default function Login({ next = '/' }: LoginProps) {
    const {signIn, isAuthenticated} = useAuth()

    if(isAuthenticated) {
        return <Navigate to={next} />
    }

    const usernameInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = usernameInputRef.current!.value
        const password = passwordInputRef.current!.value

        if(username !== "kaike" || password !== '1234') {
            alert('Usuario ou senha incorretos')
        }

        signIn({username, password})
    }

    
    return (
        <main>
            <h1>Login Page</h1>
            <form onSubmit={handleLoginSubmit}>
                <input type="text" placeholder="username" ref={usernameInputRef}/>
                <input type="text" placeholder="password" ref={passwordInputRef}/>
                <input type="submit" value="Entrar"/>
            </form>
        </main>
    )
}