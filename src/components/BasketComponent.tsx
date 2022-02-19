import { observer } from 'mobx-react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { moving } from '..';
import { Product } from '../models/Product';


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
    
    return (
        <div className="card">
        <ListGroup as="ol" numbered>
            {props.children?.map((product) =>
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
            )}
        </ListGroup>

        
        <br>{moving.price}</br>
        <Button variant="outline-primary" onClick={() => handlerReset()}> Reset </Button>
        </div>
    )
});

export default BasketComponent;
