import React from 'react';
import ReactDOM from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';
import App from "./App";
import FlagListWrapper from "./FlagListWrapper";

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);