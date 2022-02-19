import { Card, ListGroup } from 'react-bootstrap';
import {Product} from './Product';


type IListProps = {
    children: Product [] | null;
}

const ListComponent = (props: IListProps) => {
    
    const handlerAdd = (product: Product) => {
       timer.Add();

      }
      const handlerRemove = (product: Product) => {
        timer.Remove();
      }
    return (
        <ListGroup as="ol" numbered>
            <h4>List</h4>
            {props.children?.list.map((product) =>
                <ListGroup.Item>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={product.avatar} />
                        <Card.Body>
                            <Card.Title>
                            <Button variant="outline-primary" onClick={()) => handlerAdd(product)}> Add </Button>
                            <Button variant="outline-primary" onClick={() => handlerRemove(product)}> Remove </Button>                                                             
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
};

export default ListComponent;
