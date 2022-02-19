import './App.css';
import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
;import { observer } from 'mobx-react';
import { Button } from 'react-bootstrap';
import { moving } from '.';
import BasketComponent from './components/BasketComponent';
import CatalogComponent from './components/CatalogComponent';
import { Product } from './models/Product';
import { OrderComponent } from './components/OrderComponent';
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
  name:"Трикотажная водолазка",
  price: 399,
  img: "https://www.reserved.com/media/catalog/product/7/4/7466H-99X-010-1_2.jpg"
},
{
  id:3,
  name:"Штаны из шерсти",
  price: 599,
  img: "https://www.reserved.com/media/catalog/product/9/8/9836B-90X-001-1_3.jpg"
},
{
  id:4,
  name:"Жаккардовая блузка",
  price: 650,
  img: "https://www.reserved.com/media/catalog/product/1/2/1277M-77X-030-1_2.jpg"
},
{
  id:5,
  name:"Стёганая курточка",
  price: 1470,
  img: "https://www.reserved.com/media/catalog/product/7/3/7384L-03X-001-1_6.jpg"
},
{
  id:6,
  name:"Узорчатое платье",
  price: 500,
  img: "https://www.reserved.com/media/catalog/product/9/1/9162H-MLC-002-1_9.jpg"
},
{
  id:7,
  name:"Жилет из технической ткани",
  price: 880,
  img: "https://www.reserved.com/media/catalog/product/5/5/5533M-87X-003-1_11.jpg"
},
{
  id:8,
  name:"Брюкт со стрелками",
  price: 1120,
  img: "https://www.reserved.com/media/catalog/product/0/7/0706I-34X-001-1_7.jpg"
},
{
  id:9,
  name:"Трикотажное платье",
  price: 1500,
  img: "https://www.reserved.com/media/catalog/product/9/0/9050H-99X-001-1_8.jpg"
}];


const App = observer(() => {

  const navigate = useNavigate();

  const handlerBasket =() => 
  {
    navigate('basket');
  }
  const handlerCatalog =() => 
  {
    navigate('/');
  }

  return (
        <div className="App">        
          <Button variant="outline-primary" onClick={() => handlerCatalog()}> Catalog </Button>
          <Button variant="outline-primary" onClick={() => handlerBasket()}> Basket </Button>
  
        <Routes>
          <Route path="basket" element={<BasketComponent children ={moving.basket}/>}>
            <Route path="order" element={<OrderComponent />}/> 
          </Route>  
          <Route path="*" element={<Navigate replace to={'/'} />} />
          <Route path="/" element={<CatalogComponent children ={prod}/>}/>                        
        </Routes>
        </div>
  );
});

export default App;
