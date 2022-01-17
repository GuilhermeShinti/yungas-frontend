import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from "./services/server"
import App from './App';

if (process.env.NODE_ENV === "development") {
    makeServer({ environment: "development" })
}

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);