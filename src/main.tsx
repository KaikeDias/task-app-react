import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TaskPage from "./pages/taskPage/index.tsx";
import ErrorPage from "./pages/errorPage/index.tsx";
import Login from "./pages/login/index.tsx";
import About from "./pages/sobre/index.tsx";
import { AuthProvider } from "./provider/authProvider.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
