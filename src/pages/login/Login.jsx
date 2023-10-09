import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../authProvider/AuthContext';

function Login() {
    const { sinInUser, signInGoogle} = useContext(AuthContext);

    const handlesubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        sinInUser(email, password)
        .then(resut => {
           const loggedUser = resut.user;
           console.log(loggedUser);
          
        })
        .catch(error => {
           
           console.error(error.message)
        });


    };



  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form className="mt-5" onSubmit={handlesubmit}>
            <h2 className="text-center">Login</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

