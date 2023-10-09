import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import AuthProvider from './authProvider/AuthContext';

import axios from "axios"
axios.create({ baseUrl: "https://api.ekshop.com.bd/" });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <div >
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
