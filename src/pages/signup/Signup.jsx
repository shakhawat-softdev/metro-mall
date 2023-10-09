import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../authProvider/AuthContext';
import { updateProfile } from 'firebase/auth';

function Signup() {
    const { signupUser, logout } = useContext(AuthContext);

    const handlesubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imageUrl = form.imageUrl.value;
        

        signupUser(email, password)

        .then(result => {
           const loggedUser = result.user;
           updeteUserProfile(loggedUser, userName, imageUrl)
          console.log(loggedUser);
        })
        .catch(error => {
           console.error(error.message)
        })
    }

    const updeteUserProfile = (loggedUser, userName, imageUrl) => {
        console.log(loggedUser, userName, imageUrl);

        updateProfile(loggedUser, {
           displayuserName: userName, photoURL: imageUrl
        })
           .then(() => {
              console.log('user name updated');
           })
           .catch(error => console.error(error.message))
     }


  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form className="mt-5" onSubmit={handlesubmit}>
            <h2 className="text-center">Signup</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='email' placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>imageUrl</Form.Label>
              <Form.Control type="text" name='imageUrl' placeholder="Photo Url" />
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

export default Signup;

