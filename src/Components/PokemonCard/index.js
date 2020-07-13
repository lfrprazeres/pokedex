import React from "react";
import { Container, PokemonImage } from "./style";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import PokemonInfo from "../PokemonInfo";

function PokemonCard(props) {
  const { typeColors, data } = props;
  const history = useHistory();
  const cardColor = typeColors[`${data.pokemon.types[0].type.name}`].card;
  return (
    <Container
      bg={cardColor}
      onClick={() => history.push(`/about/${data.pokemon.name}`)}
    >
      <PokemonInfo pokemon={data.pokemon} />
      <PokemonImage source={data.photo} size={"59px"} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  typeColors: state.pokedex.types,
});

export default connect(mapStateToProps, null)(PokemonCard);
