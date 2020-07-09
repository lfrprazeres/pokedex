import React from "react";
import {
  Container,
  PokemonOrder,
  PokemonName,
  PokemonTypes,
  PokemonImage,
} from "./style";
import { connect } from "react-redux";
import PokemonType from "./PokemonType";

function PokemonCard(props) {
  const { image, typeColors, data } = props;
  const cardColor = typeColors[`${data.pokemon.types[0].type.name}`].card;
  function formatPokemonOrder(order) {
    let orderLength = JSON.stringify(order).length;
    switch (orderLength) {
      case 1:
        return `#00${order}`;
      case 2:
        return `#0${order}`;
      default:
        return `#${order}`;
    }
  }
  return (
    <Container bg={cardColor}>
      <PokemonOrder>{formatPokemonOrder(data.pokemon.order)}</PokemonOrder>
      <PokemonName>{data.pokemon.name}</PokemonName>
      <PokemonTypes>
        {data.pokemon.types.map((type, key) => {
          return <PokemonType typeColors={typeColors} data={type} key={key} />;
        })}
      </PokemonTypes>
      <PokemonImage source={data.photo} size={59} />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  typeColors: state.pokedex.types,
});

export default connect(mapStateToProps, null)(PokemonCard);
