import React, { useState, useEffect } from "react";
import { HomeComponent, HomeSearch, PokemonCards } from "./style";
import Actions from "./Actions";
import Header from "./Header";
import { PokemonCard, Loading } from "../../Components";
import { connect } from "react-redux";
import { gottaCatchThemAll } from "../../actions/pokedex";
import OptionsModal from "./OptionsModal";

function Home(props) {
  const {
    pokemons,
    hasMore,
    limit,
    offset,
    catchMorePokemons,
    filter,
    sort,
  } = props;
  const [pokemonList, setPokemonList] = useState(null);
  const [modalOption, setModalOption] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (filter !== "") {
      let regex = new RegExp(filter.trim(), "i");
      setPokemonList(pokemons.filter((data) => regex.test(data.pokemon.name)));
    } else {
      setPokemonList(pokemons);
    }
  }, [filter, pokemons]);

  useEffect(() => {
    if (pokemonList) {
      switch (sort) {
        case "highest": {
          let newList = pokemonList.sort((a, b) => b.pokemon.id - a.pokemon.id);
          setPokemonList(newList);
          break;
        }
        case "a-z": {
          let newList = pokemonList.sort((a, b) =>
            b.pokemon.name > a.pokemon.name ? -1 : 1
          );
          setPokemonList(newList);
          break;
        }
        case "z-a": {
          let newList = pokemonList.sort((a, b) =>
            b.pokemon.name > a.pokemon.name ? 1 : -1
          );
          setPokemonList(newList);
          break;
        }
        default: {
          let newList = pokemonList.sort((a, b) => a.pokemon.id - b.pokemon.id);
          setPokemonList(newList);
          break;
        }
      }
    }
  }, [sort, pokemonList]);

  function loadMoreItems() {
    if (filter === "") {
      catchMorePokemons(limit, offset);
    }
  }

  return (
    <>
      {pokemonList ? (
        <HomeComponent>
          <Actions setModalOption={setModalOption} />
          <Header />
          <HomeSearch />

          <PokemonCards
            itemHeight={72}
            items={pokemonList}
            hasMoreItems={hasMore}
            loadMoreItems={loadMoreItems}
          >
            {!loading &&
              pokemonList?.map((pokemon, index) => (
                <PokemonCard key={index} data={pokemon} />
              ))}
          </PokemonCards>
        </HomeComponent>
      ) : (
        <Loading />
      )}
      <OptionsModal setModalOption={setModalOption} modalOption={modalOption} />
    </>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokedex.pokemons,
  hasMore: state.pokedex.hasMore,
  limit: state.pokedex.limit,
  offset: state.pokedex.offset,
  filter: state.pokedex.filter,
  sort: state.pokedex.sort,
});

const mapDispatchToProps = (dispatch) => ({
  catchMorePokemons: (limit, offset) =>
    dispatch(gottaCatchThemAll(limit, offset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
