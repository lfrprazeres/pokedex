import React from "react";
import { Container, Title, Description } from "./style";

export default function Header() {
  return (
    <Container>
      <Title>Pokédex</Title>
      <Description>
        Search for Pokémon by name or using the National Pokédex number.
      </Description>
    </Container>
  );
}
