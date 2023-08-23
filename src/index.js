import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeting from './component/greeting/greeting';


/* React.StrictMode: Componente de React que se utiliza en el desarrollo para detectar y advertit sobre
posibles problemas en una aplicacion.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


