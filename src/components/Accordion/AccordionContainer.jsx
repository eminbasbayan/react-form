import React from "react";
import { Accordion } from "react-bootstrap";

const AccordionContainer = props => {
  return <Accordion defaultActiveKey="1">{props.children}</Accordion>;
};
export default AccordionContainer;
