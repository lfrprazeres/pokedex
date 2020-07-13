import React from "react";
import { Container } from "./style";

export default function Image(props) {
  const { source, alt, size, className, onClick, style } = props;
  return (
    <Container
      size={size}
      onClick={onClick}
      style={style}
      className={className}
    >
      <img src={source} alt={alt} style={{ width: "100%", zIndex: 2 }} />
    </Container>
  );
}
