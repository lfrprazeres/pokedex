import React, { useState, useEffect } from "react";
import { Loading } from "../../Components";
import { connect } from "react-redux";
import {
  Container,
  BackgroundName,
  Header,
  PokemonImage,
  PokemonIntoContainer,
} from "./style";
import { Image, PokemonInfo } from "../../Components";
import axios from "axios";

function About(props) {
  const { location, pokemons, typeColors } = props;
  const [pokemon, setPokemon] = useState(null);
  const [screenColor, setScreenColor] = useState("");
  const paths = location.pathname.split("/");
  const pokemonName = paths[paths.length - 1];

  useEffect(() => {
    if (pokemons) {
      let ourPokemon = pokemons.find(
        (data) => data.pokemon.name === pokemonName
      );
      if (!ourPokemon) getPokemonInTheApi();
      if (ourPokemon) setPokemon(ourPokemon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonName, pokemons]);

  useEffect(() => {
    if (pokemon) {
      setScreenColor(typeColors[`${pokemon.pokemon.types[0].type.name}`].card);
    }
  }, [pokemon, typeColors]);

  async function getPokemonInTheApi() {
    let data = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.data);
    setPokemon({
      pokemon: data,
      photo: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
    });
  }

  return (
    <>
      {pokemon ? (
        <Container bg={screenColor}>
          <BackgroundName>{pokemon.pokemon.name}</BackgroundName>
          <Header>
            <PokemonImage source={pokemon.photo} size={55} />
            <PokemonIntoContainer>
              <PokemonInfo pokemon={pokemon.pokemon} nameSize={"17px"} />
            </PokemonIntoContainer>
          </Header>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokedex.pokemons,
  typeColors: state.pokedex.types,
});

export default connect(mapStateToProps, null)(About);
