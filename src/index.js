import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

const rootElement = document.getElementById('root');

// Use hydrateRoot for prerendered content (react-snap compatibility)
// This allows React to attach to the prerendered HTML without re-rendering
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Fallback to standard rendering if no prerendered content
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

