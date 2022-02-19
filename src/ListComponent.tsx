import { observer } from 'mobx-react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { timer } from '.';
import { Product } from './Product';


type IListProps = {
    children: Product [] | null;
}

const ListComponent = observer((props: IListProps) => {
    
    const handlerAdd = (product: Product) => {
       timer.AddProduct(product);

      }
      const handlerRemove = (i: number) => {
        timer.RemoveProduct(i);
      }
    return (
        <ListGroup as="ol" numbered>
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
});

export default ListComponent;
