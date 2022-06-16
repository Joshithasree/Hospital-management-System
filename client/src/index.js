import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';

import './index.css';

ReactDOM.render(
  <AuthContextProvider>
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
  </AuthContextProvider>,
  document.getElementById('root')
);
