import './App.css';
import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';;
import CatalogComponent from './components/CatalogComponent';
import { observer } from "mobx-react"
import { moving } from './index';
import { Button } from "react-bootstrap"
import { Product } from './models/Product';
import BasketComponent from './components/BasketComponent';

const prod: Product [] =[{
  
  id:1,
  name:"Cola",
  price: 120,
  img: ""
},
{
  id:2,
  name:"Moloko",
  price: 120,
  img: ""
}];


const App = observer(() => {

  const navigate = useNavigate();

  const handlerBusket =() => 
  {
    navigate('basket');
  }
  const handlerCatalog =() => 
  {
    navigate('/');
  }

  return (
        <div className="App">
          <Button variant="outline-primary" onClick={() => handlerBusket()}> Busket </Button>
          <Button variant="outline-primary" onClick={() => handlerCatalog()}> Catalog </Button>

        <Routes>
          <Route path="basket" element={<BasketComponent children ={moving.basket}/>} />
          <Route path="*" element={<Navigate replace to={'/'} />} />
          <Route path="/" element={<CatalogComponent children ={prod}/>}/>        
        </Routes>
        </div>
  );
});

export default App;
