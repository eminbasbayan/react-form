import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const FormButton = props => {
  return (
    <Col sm={props.colSize}>
      <Form.Group>
        <Button
          id={props.id}
          variant={props.variant}
          type={props.type}
          size={props.size}
          onClick={props.onClick}
        >
          {props.value}
        </Button>
      </Form.Group>
    </Col>
  );
};
export default FormButton;
