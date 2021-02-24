import React from "react";
import { Form, Col } from "react-bootstrap";

const FormControl = props => {
  return (
    <Col sm={!props.colSize ? 4 : props.colSize}>
      <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.type}
          rows={props.rows}
          placeholder={props.placeholder}
          as={props.as}
          required={props.isRequired}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </Form.Group>
    </Col>
  );
};
export default FormControl;
