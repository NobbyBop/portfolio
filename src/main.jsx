import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./components/App.jsx";
import "./App.css";
createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
