import React from 'react';
import ReactDom from 'react-dom/client'
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';

import './styles.css';
// import { HelloWorldApp } from './HelloWorldApp';


ReactDom.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <CounterApp value = { 10 }/>
  </React.StrictMode>
);

CounterApp.prototype{
  value: PropTypes.number.isRequired
}
