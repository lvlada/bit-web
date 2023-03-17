import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

export default function Login() {
    const[user, setUser] = useState('');
    const[pass, setPass] = useState('');

    const printInfo = (event) =>{
        event.preventDefault()
        alert(`User: ${event.target[0].value} Pass: ${event.target[1].value}`);
        
    }

  return (
    <Container className="login">
        <h1>Login</h1>
      <Row className="justify-content-md-center">
        <Col xs={12} >
          <Form onSubmit={printInfo}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button><br />
            <Button variant="link" type="reset" id="reset">
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
