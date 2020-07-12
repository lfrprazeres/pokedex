import React from "react";
import { Container } from "./style";

function Modal(props) {
  const { visible, children } = props;
  return <Container visible={visible !== false}>{children}</Container>;
}

export default Modal;
