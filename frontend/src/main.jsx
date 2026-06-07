// import { StrictMode } from 'react'
// import React from "react";
// import { createRoot } from 'react-dom/client'
// import { AuthProvider } from "./context/AuthContext";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
// <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);