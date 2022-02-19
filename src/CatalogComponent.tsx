import { timer } from './index';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap"
import { Product } from './Product';
import { observer } from 'mobx-react';

type IListProps = {
  children: Product [] | null;
}

const CatalogComponent = observer((props: IListProps) => 

{   
  const handlerAdd = (product: Product) => {
    timer.AddProduct(product);

   }
   const handlerRemove = (id: number) => {
     timer.RemoveProduct(id);
   }
  return (
    
    <ListGroup as="ol" numbered>
      {timer.basket.length}
    {props.children?.map((product) =>
        <ListGroup.Item>
            <Card style={{ width: '350px' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>
                      {product.name}
                      
                    <Button variant="outline-primary" onClick={() => handlerAdd(product)}> Add </Button>
                    <Button variant="outline-primary" onClick={() => handlerRemove(product.id)}> Remove </Button>                                                             
                    </Card.Title>
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )}
</ListGroup>
    )
  ;
});

export default CatalogComponent;