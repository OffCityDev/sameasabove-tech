import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Building from './Building';
import Home from './Home';
import OffCity from './OffCity';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BUILDING" element={<Building />} />
        <Route path="/home" element={<Home />} />
        <Route path="/offcity" element={<OffCity />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
