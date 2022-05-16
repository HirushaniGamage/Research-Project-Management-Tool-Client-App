import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./App.scss";
import Login from "./components/Login";

//import "assets/plugins/nucleo/css/nucleo.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";
//import "assets/scss/argon-dashboard-react.scss";

//const root = ReactDOM.createRoot(document.getElementById("login"));
//root.render(<Login />);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
