import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import UseffectDEMO from './UseffectDEMO';
import Context from './contextPOCs/Context';
import ThemeManager from "./contextPOCs/ThemeChanger";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // <UseffectDEMO></UseffectDEMO>
    // <Context />
    <ThemeManager></ThemeManager>
);
