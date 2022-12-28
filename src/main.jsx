import React from 'react';
import ReactDom from 'react-dom/client'
import { FirstApp } from './FirstApp';
import './styles.css';
// import { HelloWorldApp } from './HelloWorldApp';


ReactDom.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <FirstApp title="Hola soy Goku" subtitle="Un Subtitulo"/>
  </React.StrictMode>
);
