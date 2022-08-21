import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import AboutMe from './components/about_me';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <AbouutMe />
  </React.StrictMode>
);

