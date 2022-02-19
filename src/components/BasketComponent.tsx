import { observer } from 'mobx-react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { moving } from '..';
import { Product } from '../models/Product';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { OrderComponent } from './OrderComponent';

type IListProps = {
    children: Product [] | null;
}

const BasketComponent = observer((props: IListProps) => {
    
    const handlerAdd = (product: Product) => {
        moving.AddProduct(product);
      }
      const handlerRemove = (i: number) => {
        moving.RemoveProduct(i);
      }
      const handlerReset = () => {
        moving.reset();
      }
      const navigate = useNavigate();
      
      const handlerOrder =() => 
      {
        navigate('order');
      }
    
      return (<>
        <ListGroup as="ol" numbered>
            <div className = "card">
          Предметов в корзине: {moving.basket.length} <Button variant="outline-primary" onClick={() => handlerReset()}> Reset </Button>
          {
            props.children?.map((product) =>
              <ListGroup.Item>
                  <Card style={{ width: '350px' }}>
                      <Card.Img variant="top" src={product.img} />
                      <Card.Body>
                          <Card.Title>  
                            {product.name}
                            <br></br>
                            {product.price} грн                                       
                          </Card.Title>
                            <Button variant="outline-primary" onClick={() => handlerAdd(product)}> Add </Button>
                            <Button variant="outline-primary" onClick={() => handlerRemove(product.id)}> Remove </Button>                                                                                                
                      </Card.Body>
                  </Card>
              </ListGroup.Item>
        ) }
        </div>
        </ListGroup>             
        <h2>Full Price: {moving.price}</h2> <Button variant="outline-primary" onClick={() => handlerOrder()}> Order </Button>
        <div>
    <Routes>
    <Route path="order" element={<OrderComponent/>}/>        
  </Routes></div>
        </>
    )
});

export default BasketComponent;
