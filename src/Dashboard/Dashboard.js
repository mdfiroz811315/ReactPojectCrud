import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <Form.Group size="lg" controlId="email">
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => 
            setEmail(e.target.value)}/>
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <Form.Group size="lg" controlId="password">
          <Form.Label><b>Password</b></Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => 
            setPassword(e.target.value)}/>
        </Form.Group>
        </Col>
        </Row><br/>
        <Row>
        <Col md={{ span: 4, offset: 4 }}>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        </Col>
        </Row>
      </Form>
    </div>
  );
}