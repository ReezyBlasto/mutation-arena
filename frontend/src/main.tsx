import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Order matters: tokens first (design-system vars), then globals (resets/keyframes).
import "./styles/tokens.css";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
