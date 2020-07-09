import React from "react";
import { HomeComponent, PokemonCards } from "./style";
import Actions from "./Actions";
import Header from "./Header";
import { Search, PokemonCard } from "../../Components";
import { connect } from "react-redux";

function Home(props) {
  const { pokemons } = props;
  return (
    <HomeComponent>
      <Actions />
      <Header />
      <Search />
      <PokemonCards>
        {pokemons?.map((pokemon, index) => (
          <PokemonCard key={index} data={pokemon} />
        ))}
      </PokemonCards>
    </HomeComponent>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokedex.pokemons,
});

export default connect(mapStateToProps, null)(Home);
