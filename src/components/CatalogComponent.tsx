
import { Button, Card, ListGroup } from "react-bootstrap"
import { observer } from 'mobx-react';
import { Product } from "../models/Product";
import { moving } from '..';

type IListProps = {
  children: Product [] | null;
}

const CatalogComponent = observer((props: IListProps) => 

{   
  const handlerAdd = (product: Product) => {
    moving.AddProduct(product);

   }
   const handlerRemove = (id: number) => {
    moving.RemoveProduct(id);
   }

  return (
    <div className="card">
    <ListGroup as="ol" numbered>
      {moving.basket.length}
      {
        props.children?.map((product) =>
          <ListGroup.Item>
              <Card style={{ width: '350px' }}>
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                      <Card.Title>  
                        {product.name}                                       
                      </Card.Title>
                        <Button variant="outline-primary" onClick={() => handlerAdd(product)}> Add </Button>
                        <Button variant="outline-primary" onClick={() => handlerRemove(product.id)}> Remove </Button>                                                                                                
                  </Card.Body>
              </Card>
          </ListGroup.Item>
    ) }
    </ListGroup>
    </div>
    )
  ;
});

export default CatalogComponent;