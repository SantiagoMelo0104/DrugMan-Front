import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './authProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

