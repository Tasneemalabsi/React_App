import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_domain}
    clientId={process.env.REACT_APP_clientID}
    redirectUri={window.location.origin}
    useRefreshTokens={true}
    >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
