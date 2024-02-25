import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { BrowserRouter } from "react-router-dom";
import HeaderBar from './bars/HeaderBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HeaderBar height={"75px"}/>
    <App height={"calc(100vh - 75px)"}/>
  </BrowserRouter>
);

