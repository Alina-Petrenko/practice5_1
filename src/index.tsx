
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Timer } from './store/timer.store';
import { BrowserRouter } from 'react-router-dom';


export const timer = new Timer();

ReactDOM.render(
    <React.StrictMode>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
)