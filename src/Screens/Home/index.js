import React, { useState, useEffect } from "react";
import { HomeComponent, HomeSearch, PokemonCards } from "./style";
import Actions from "./Actions";
import Header from "./Header";
import { PokemonCard, Loading } from "../../Components";
import { connect } from "react-redux";
import { gottaCatchThemAll } from "../../actions/pokedex";

function Home(props) {
  const { pokemons, hasMore, limit, offset, catchMorePokemons, filter } = props;
  const [pokemonList, setPokemonList] = useState(null);

  useEffect(() => {
    if (filter !== "") {
      let regex = new RegExp(filter.trim(), "i");
      setPokemonList(pokemons.filter((data) => regex.test(data.pokemon.name)));
    } else {
      setPokemonList(pokemons);
    }
  }, [filter, pokemons]);

  function loadMoreItems() {
    if (filter === "") {
      catchMorePokemons(limit, offset);
    }
  }
  return (
    <>
      {pokemonList ? (
        <HomeComponent>
          <Actions />
          <Header />
          <HomeSearch />

          <PokemonCards
            itemHeight={72}
            items={pokemonList}
            hasMoreItems={hasMore}
            loadMoreItems={loadMoreItems}
          >
            {pokemonList?.map((pokemon, index) => (
              <PokemonCard key={index} data={pokemon} />
            ))}
          </PokemonCards>
        </HomeComponent>
      ) : (
        <Loading />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokedex.pokemons,
  hasMore: state.pokedex.hasMore,
  limit: state.pokedex.limit,
  offset: state.pokedex.offset,
  filter: state.pokedex.filter,
});

const mapDispatchToProps = (dispatch) => ({
  catchMorePokemons: (limit, offset) =>
    dispatch(gottaCatchThemAll(limit, offset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
