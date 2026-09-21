import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/bootstrap-overrides.css";

import App from "./App";


/* =========================================================
   RESTORE SAVED THEME BEFORE APP RENDERS
   ========================================================= */

const savedTheme =
  localStorage.getItem("jeevanTheme") || "dark";

document.documentElement.setAttribute(
  "data-theme",
  savedTheme
);


/* =========================================================
   RENDER APP
   ========================================================= */

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);