// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './components/MyComponent/MyComponent';
import reactToWebComponent from 'react-to-webcomponent';

// Convert the React component to a Web Component
const WebButtonComponent = reactToWebComponent(MyComponent, React, ReactDOM, {
  props: ['label'], // Ensure 'label' is treated as a prop
});

// Define the custom element (web component)
customElements.define('web-button', WebButtonComponent);