import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Basket } from './store/basket.store';
import { BrowserRouter } from 'react-router-dom';


export const moving = new Basket();

ReactDOM.render(
    <React.StrictMode>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals();