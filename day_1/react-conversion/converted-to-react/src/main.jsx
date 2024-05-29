import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

import "./styles/reset.css";
import "./styles/style.css";
import "./styles/utilities.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
