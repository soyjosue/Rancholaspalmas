import React from 'react';

import { Form, Col, InputGroup, FormControl } from 'react-bootstrap';

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <Form>

        {/* Nombre */}
        <Form.Row>

          <Form.Group 
            as={Col}
            controlId="formGridName"
          >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre" />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formGridEmail"
          >
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Tu correo" />
          </Form.Group>

        </Form.Row>

        <Form.Row>
          <Form.Group
            controlId="controlTextArea"
          >
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Información Extra</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="Información Extra"
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>

      </Form>
    </div>
  )
}

export default Contact
