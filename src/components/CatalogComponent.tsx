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

 

  return (<>
    <ListGroup as="ol" numbered>
      Предметов в корзине: {moving.basket.length}
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
                              
                  </Card.Body>
              </Card>
          </ListGroup.Item>
    ) }
    </ListGroup>
        <br></br>
  </>)
  ;
});

export default CatalogComponent;