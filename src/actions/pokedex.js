import { RSAA } from "redux-api-middleware";
import axios from "axios";

const standardStart = "POKEDEX::";

export const GOTTA_CATCH_THEM_ALL = `${standardStart}GOTTA_CATCH_THEM_ALL`;
export const CATCHED_THEM_ALL = `${standardStart}CATCHED_THEM_ALL`;
export const NOT_CATCHED_THEM_ALL = `${standardStart}NOT_CATCHED_THEM_ALL`;
export const CHANGE_POKEMON_LIST = `${standardStart}CHANGE_POKEMON_LIST`;

export const gottaCatchThemAll = (limit, offset) => {
  return {
    [RSAA]: {
      endpoint: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
      method: "GET",
      types: [
        {
          type: GOTTA_CATCH_THEM_ALL,
        },
        {
          type: CATCHED_THEM_ALL,
          payload: async (action, state, response) => {
            let data = await response.json();
            return Promise.all(
              data.results.map(async (result) => {
                let pokemonResult = await axios
                  .get(result.url)
                  .then((pokemon) => pokemon.data);
                const paths = result.url.split("/");
                const pokemonId = paths[paths.length - 2];
                const photo = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
                return {
                  pokemon: pokemonResult,
                  photo: photo,
                };
              })
            ).then((pokemons) => pokemons);
          },
        },
        {
          type: NOT_CATCHED_THEM_ALL,
        },
      ],
    },
  };
};

export const FILTER_POKEMONS_WITH_DEBOUNCE = `${standardStart}FILTER_POKEMONS_WITH_DEBOUNCE`;
export const FILTER_POKEMONS = `${standardStart}FILTER_POKEMONS`;

export const filterPokemons = (filter) => {
  return {
    type: FILTER_POKEMONS_WITH_DEBOUNCE,
    payload: filter,
  };
};

export const SORT_LIST = `${standardStart}SORT_LIST`;

export const sortList = (option, pokemons) => {
  let newList;
  switch (option) {
    case "highest": {
      newList = pokemons.sort((a, b) => b.pokemon.id - a.pokemon.id);
      break;
    }
    case "a-z": {
      newList = pokemons.sort((a, b) =>
        b.pokemon.name > a.pokemon.name ? -1 : 1
      );
      break;
    }
    case "z-a": {
      newList = pokemons.sort((a, b) =>
        b.pokemon.name > a.pokemon.name ? 1 : -1
      );
      break;
    }
    default: {
      newList = pokemons.sort((a, b) => a.pokemon.id - b.pokemon.id);
      break;
    }
  }
  return {
    type: SORT_LIST,
    payload: { option, pokemons: newList },
  };
};

export const CHANGE_GENERATION = `${standardStart}CHANGE_GENERATION`;

export const changeGeneration = (generation) => {
  return {
    type: CHANGE_GENERATION,
    payload: { generation },
  };
};
