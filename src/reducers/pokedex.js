import {
  CATCHED_THEM_ALL,
  FILTER_POKEMONS,
  SORT_LIST,
} from "../actions/pokedex";

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
    electric: {
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
    psychic: {
      card: "#CE0D2C",
      icon: "#EA5D60",
    },
    rock: {
      card: "#4D443F",
      icon: "#C8B686",
    },
    steel: {
      card: "#9EA0AF",
      icon: "#417D9A",
    },
    ice: {
      card: "#99E3FC",
      icon: "#61CEC0",
    },
    ghost: {
      card: "#5959AE",
      icon: "#556AAE",
    },
    dragon: {
      card: "#4A446A",
      icon: "#7038F8",
    },
    dark: {
      card: "#6D5646",
      icon: "#D80556",
    },
  },
  limit: 20,
  offset: 0,
  hasMore: true,
  filter: "",
  sort: "smallest",
};

export const pokedexReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CATCHED_THEM_ALL: {
      return {
        ...state,
        pokemons: [...(state.pokemons || []), ...payload],
        offset: state.offset + state.limit,
        hasMore: state.offset + state.limit < 964,
      };
    }
    case FILTER_POKEMONS: {
      return {
        ...state,
        filter: payload,
      };
    }
    case SORT_LIST: {
      return {
        ...state,
        sort: payload.option,
        pokemons: payload.pokemons,
      };
    }
    default:
      return state;
  }
};
