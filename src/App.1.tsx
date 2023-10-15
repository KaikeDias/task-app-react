import { useMemo } from "react";
import { useAuth } from "./hook/useAuth";
import TaskPage from "./pages/taskPage";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import { HomePage } from "./pages/home";

export function App() {
  const { signOut, isAuthenticated, user } = useAuth();

  const authBlock = useMemo(() => {
    return isAuthenticated ? (
      <p>
        {user!.username}
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sair
        </button>
      </p>
    ) : (
      <p>Ola visitante</p>
    );
  }, [isAuthenticated]);

  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>Task App</h1>
          <span>{authBlock}</span>
          <nav>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks">
            <Route
              index
              element={
                <ProtectedRoute>
                  {" "}
                  <TaskPage />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path=":id"
              element={
                <ProtectedRoute>
                  {" "}
                  <TaskPage />{" "}
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

  // return (
  //   <>
  //     <Navbar/>
  //     {/* <TaskPage /> */}
  //     <Outlet />
  //   </>
  // )
}
