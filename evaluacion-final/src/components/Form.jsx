import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import './Form.css';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <FormGroup className="form-group">
        <Label for="name">Nombre y Apellido:</Label>
        <Input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="email">Email:</Label>
        <Input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <Button type="submit">Enviar</Button>

      {showMessage && (
        <Alert color="success" className="show-message">
          Gracias {name} lo contactaremos en la brevedad
        </Alert>
      )}
    </Form>
  );
};

export default ContactForm;