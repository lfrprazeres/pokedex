import React from "react";
import { PokemonOrder, PokemonName, PokemonTypes } from "./style";
import PokemonType from "./PokemonType";

function PokemonInfo(props) {
  const { pokemon } = props;
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
    <>
      <PokemonOrder>{formatPokemonOrder(pokemon.order)}</PokemonOrder>
      <PokemonName>{pokemon.name}</PokemonName>
      <PokemonTypes>
        {pokemon.types.map((type, key) => {
          return <PokemonType data={type} key={key} />;
        })}
      </PokemonTypes>
    </>
  );
}

export default PokemonInfo;
