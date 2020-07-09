import React from "react";
import { Container, TypeIcon, Text } from "./style";

function PokemonType(props) {
  const { data, typeColors } = props;
  const bg = typeColors[data.type.name].icon;
  return (
    <Container bg={bg}>
      <TypeIcon
        src={require(`../../../assets/images/icons/pokemonTypes/${data.type.name}.svg`)}
        size={7}
      />
      <Text>{data.type.name}</Text>
    </Container>
  );
}

export default PokemonType;
