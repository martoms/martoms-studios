// External CSS
import 'bootstrap/dist/css/bootstrap.css';
// Internal Modular CSS
import './styles/index.css';
import './styles/projects.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AllContextProvider } from './contexts/AllContexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllContextProvider>
      <App />
    </AllContextProvider>
  </React.StrictMode>
);