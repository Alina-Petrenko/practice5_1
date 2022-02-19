import { timer } from './index';
import { Button, Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap"

  type ProductProps = {
    product: ProductProps | null
};

const CatalogComponent = (props: ProductProps) => 

{   
  const handlerAdd = () => {
    timer.increase();
  }
  const handlerRemove = () => {
    timer.decrease();
  }
  return (
        <div>
          <CardGroup className="Product">
            <Card>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="outline-primary" onClick={() => handlerAdd()}> Add </Button>
          <Button variant="outline-primary" onClick={() => handlerRemove()}> Remove </Button>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body></Card>
        
        <Card>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Content
          </Card.Text>
          <Button variant="outline-primary" onClick={() => handlerAdd()}> Add </Button>
          <Button variant="outline-primary" onClick={() => handlerRemove()}> Remove </Button>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>

        <Card>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Content
          </Card.Text>
          <Button variant="outline-primary" onClick={() => handlerAdd()}> Add </Button>
          <Button variant="outline-primary" onClick={() => handlerRemove()}> Remove </Button>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>

        <Card>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Content
          </Card.Text>
          <Button variant="outline-primary" onClick={() => handlerAdd()}> Add </Button>
          <Button variant="outline-primary" onClick={() => handlerRemove()}> Remove </Button>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>

        <Card>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Content
          </Card.Text>
          <Button variant="outline-primary" onClick={() => handlerAdd()}> Add </Button>
          <Button variant="outline-primary" onClick={() => handlerRemove()}> Remove </Button>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
      </CardGroup>
      
      </div>
    )
  ;
}

export default CatalogComponent;