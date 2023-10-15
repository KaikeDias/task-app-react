import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./provider/authProvider.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
