import { Card, ListGroup } from 'react-bootstrap';
import ProductComponent from './ProductComponent';


type IListProps = {
    children: ProductComponent | null;
}

const ListComponent = (props: IListProps) => {

    return (
        <ListGroup as="ol" numbered>
            <h4>List</h4>
            {props.children?.list.map((item) =>
                <ListGroup.Item>
                    <Card style={{ width: '350px' }}>
                        <Card.Img variant="top" src={item.avatar} />
                        <Card.Body>
                            <Card.Title>
                                Avatar
                                <p>Id: {item.id}</p>
                                <p>Name: {item.first_name} {item.last_name}</p>
                                <p>Email: {item.email}</p>                                                             
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
};

export default ListComponent;
