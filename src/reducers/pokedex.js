import { CATCHED_THEM_ALL } from "../actions/pokedex";

const initialState = {
  pokemons: null,
  types: {
    grass: {
      card: "#8BBE8A",
      icon: "#62B957",
    },
    poison: {
      card: "#9F6E97",
      icon: "#A552CC",
    },
    fire: {
      card: "#FFA756",
      icon: "#FD7D24",
    },
    flying: {
      card: "#ff0000",
      icon: "#748FC9",
    },
    water: {
      card: "#58ABF6",
      icon: "#4A90DA",
    },
    bug: {
      card: "#8BD674",
      icon: "#8CB230",
    },
    normal: {
      card: "#B5B9C4",
      icon: "#9DA0AA",
    },
    eletric: {
      card: "#F2CB55",
      icon: "#EED535",
    },
    ground: {
      card: "#F78551",
      icon: "#DD7748",
    },
    fairy: {
      card: "#EBA8C3",
      icon: "#ED6EC7",
    },
    fighting: {
      card: "#EB4971",
      icon: "#D04164",
    },
  },
  limit: 10,
  offset: 0,
};

export const pokedexReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATCHED_THEM_ALL: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    default:
      return state;
  }
};
