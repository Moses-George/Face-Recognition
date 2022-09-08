import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import UrlContextProvider from './store/UrlContextProvider';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UrlContextProvider>
      <App />
    </UrlContextProvider>
  </React.StrictMode>
);
