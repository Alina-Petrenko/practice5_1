import { Button, Form } from "react-bootstrap"
import { Route, Routes, useNavigate } from "react-router-dom"

export const OrderComponent = () =>
{
    const navigate = useNavigate();
      
      const handlerHome =() => 
      {
        navigate('/');
      }
    return (<><Form className="card">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => handlerHome()}>
          Submit
        </Button>
      </Form>
      <div>    
        <Routes>
        <Route path="order" element={<OrderComponent/>}/>        
        </Routes>
        </div>
      </>
      )
}