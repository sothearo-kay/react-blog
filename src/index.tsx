import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";
import "./index.css";
import "github-markdown-css/github-markdown-light.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
