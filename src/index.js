import React from 'react';
import ReactDOM from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';
import App from "./App";
import Header from "./Header";
import FlagListWrapper from "./FlagListWrapper";

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// const root1 = ReactDOM.createRoot(document.getElementById('header'));
// root1.render(
//     <React.StrictMode>
//         <Header/>
//     </React.StrictMode>
// );

