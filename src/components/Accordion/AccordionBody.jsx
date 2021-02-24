import React from "react";
import { Accordion, Card, Row } from "react-bootstrap";

const AccordionBody = props => {
  return (
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey={props.eventKey + 1}>
        {props.title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.eventKey + 1}>
        <Card.Body>
          <Row>{props.children}</Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default AccordionBody;
