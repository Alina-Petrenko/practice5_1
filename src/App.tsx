import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import CatalogComponent from './CatalogComponent';
import MeComponent from './MeComponent';
import { debug } from 'console';
import { makeAutoObservable } from 'mobx';
import { observer } from "mobx-react"
import { timer } from './index';
import { BasketComponent } from './BasketComponent';
import  ProductComponent from './ProductComponent';
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap"



const App = observer(() => {

  const navigate = useNavigate();
  
  //const [isAbout, setIsAbout] = useState<boolean>(false);



  const handlerBusket =() => 
  {
    navigate('busket');
  }
  const handlerCatalog =() => 
  {
    navigate('catalog');
  }
  const handlerUser =() => 
  {
    navigate('me');
  }



  /*const handlerNavigate = () => {
    localStorage.setItem("key_basket", JSON.stringify([1, 2, 3]));
    const str_basket = localStorage.getItem("key_basket");
    if (str_basket != null) {
      const array = JSON.parse(str_basket) as number[];
      debugger;
    }
    console.log();
    if (isAbout) {
      navigate('/');
      setIsAbout(false);
      return;
    }
    navigate('about');
    setIsAbout(true);
  }*/

  return (
      <>
        <div className="App">
          <Button variant="outline-primary" onClick={() => handlerBusket()}> Busket </Button>
          <Button variant="outline-primary" onClick={() => handlerCatalog()}> Catalog </Button>
          <Button variant="outline-primary" onClick={() => handlerUser()}> User </Button>
        </div>

        {timer.secondsPassed}
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="busket" element={<BasketComponent />} />
          <Route path="*" element={<Navigate replace to={'/'} />} />
          <Route path="catalog" element={<CatalogComponent />}/>        
        </Routes>


      </>
  );
});

export default App;
