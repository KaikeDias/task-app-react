import { useMemo } from 'react'
import './App.css'
import { useAuth } from './hook/useAuth'
import TaskPage from './pages/taskPage'
import {BrowserRouter, NavLink, Outlet, Route, Routes} from "react-router-dom"
import Login from './pages/login'
import { HomePage } from './pages/home'
import ErrorPage from './pages/errorPage'
import { ProtectedRoute } from './protectedRoute'

function App() {
  const {signOut, isAuthenticated, user} = useAuth()

  const authBlock = useMemo(() => {
    return(
      isAuthenticated 
        ?
        <p>
          {user!.username}
          <button onClick={() => {signOut()}}>Sair</button>
        </p>
        :
        <p>Ola visitante</p>
    )
  }, [isAuthenticated])

  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>Task App</h1>
          <span>
            {authBlock}
          </span>
          <nav>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/tasks"}>Tasks</NavLink></li>
            <li><NavLink to={"/login"}>Login</NavLink></li>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/tasks'>
            <Route index element={<ProtectedRoute> <TaskPage /> </ProtectedRoute>} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
