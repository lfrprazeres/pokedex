import React from "react";
import { HomeComponent, HomeSearch, PokemonCards } from "./style";
import Actions from "./Actions";
import Header from "./Header";
import { PokemonCard } from "../../Components";
import { connect } from "react-redux";
import { gottaCatchThemAll } from "../../actions/pokedex";

function Home(props) {
  const { pokemons, hasMore, limit, offset, catchMorePokemons } = props;

  function loadMoreItems() {
    catchMorePokemons(limit, offset);
  }
  return (
    <HomeComponent>
      <Actions />
      <Header />
      <HomeSearch />
      {pokemons && (
        <PokemonCards
          itemHeight={72}
          items={pokemons}
          hasMoreItems={hasMore}
          loadMoreItems={loadMoreItems}
        >
          {pokemons?.map((pokemon, index) => (
            <PokemonCard key={index} data={pokemon} />
          ))}
        </PokemonCards>
      )}
    </HomeComponent>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokedex.pokemons,
  hasMore: state.pokedex.hasMore,
  limit: state.pokedex.limit,
  offset: state.pokedex.offset,
});

const mapDispatchToProps = (dispatch) => ({
  catchMorePokemons: (limit, offset) =>
    dispatch(gottaCatchThemAll(limit, offset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
