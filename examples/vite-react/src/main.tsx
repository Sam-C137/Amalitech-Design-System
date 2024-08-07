import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@amalitech-design-system/core/dist/amalitech-design-system/amalitech-design-system.css';
import { defineCustomElements, applyPolyfills } from '@amalitech-design-system/core/loader';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

applyPolyfills().then(() => {
  defineCustomElements(window);
});
