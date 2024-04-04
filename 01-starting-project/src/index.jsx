import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);
// O exemplo abaixo substitui o de cima empregando o JSX
// Vide informação: Anotations/JSXvsCommom.png
ReactDOM.createRoot(entryPoint).render(React.createElement(App));