import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import "./assets/index.css"
import {GlobalProvider} from "./store";
import React from 'react';
import {TerminalContextProvider} from "react-terminal";
import "./i18n"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <GlobalProvider>
            <BrowserRouter>
                <TerminalContextProvider>
                    <App />
                </TerminalContextProvider>
            </BrowserRouter>
        </GlobalProvider>
  </React.StrictMode>,
)