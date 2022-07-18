import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Titulo from './App';
import SubTitulo from './subtitulo';
import Parrafo from './parrafo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Titulo/>
    <SubTitulo/>
    <Parrafo/>
  </React.StrictMode>
);


