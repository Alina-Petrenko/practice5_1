import './App.css';
import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';import { observer } from 'mobx-react';
import { Button } from 'react-bootstrap';
import { moving } from '.';
import BasketComponent from './components/BasketComponent';
import CatalogComponent from './components/CatalogComponent';
import { Product } from './models/Product';
;


const prod: Product [] =[{
  
  id:0,
  name:"Жилет из материала с добавлением шерсти",
  price: 2399,
  img: "https://www.reserved.com/media/catalog/product/3/6/3611M-80X-001-1_2.jpg"
},
{
  id:1,
  name:"Рубашка из вискозы",
  price: 499,
  img: "https://www.reserved.com/media/catalog/product/0/9/0981I-01X-001-1_5.jpg"
},
{
  id:2,
  name:"Moloko",
  price: 120,
  img: ""
},
{
  id:3,
  name:"Moloko",
  price: 120,
  img: ""
},
{
  id:4,
  name:"Moloko",
  price: 120,
  img: ""
},
{
  id:5,
  name:"Moloko",
  price: 120,
  img: ""
},
{
  id:6,
  name:"Moloko",
  price: 120,
  img: ""
},
{
  id:7,
  name:"Moloko",
  price: 120,
  img: ""
},
{
  id:8,
  name:"Moloko",
  price: 120,
  img: ""
},
{
  id:9,
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
