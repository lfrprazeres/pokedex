import { debounce, all, call, put, takeLatest } from "redux-saga/effects";
import {
  FILTER_POKEMONS,
  FILTER_POKEMONS_WITH_DEBOUNCE,
  CHANGE_GENERATION,
  CHANGE_POKEMON_LIST,
} from "../actions/pokedex";
import axios from "axios";
import { SHOW_SNACKBAR } from "../actions/app";
import { SNACKBAR_TYPES } from "../reducers/app";

function* filterPokemonsSaga({ payload }) {
  yield put({
    type: FILTER_POKEMONS,
    payload,
  });
}

function* changeGenerationSaga({ payload }) {
  if (payload.generation !== "") {
    try {
      let pokemons = yield call(getPokemonsByGeneration, payload.generation);
      yield put({
        type: CHANGE_POKEMON_LIST,
        payload: { generation: payload.generation, pokemons },
      });
    } catch (err) {
      yield put({
        type: SHOW_SNACKBAR,
        payload: {
          message: "this generation doesn't exist on API yet",
          type: SNACKBAR_TYPES.error,
        },
      });
      yield put({
        type: CHANGE_GENERATION,
        payload: { generation: "" },
      });
    }
  }
}

async function getPokemonsByGeneration(generation) {
  let pokemons = [];
  let gen = "";
  switch (generation) {
    case "I":
      gen = "1";
      break;
    case "II":
      gen = "2";
      break;
    case "III":
      gen = "3";
      break;
    case "IV":
      gen = "4";
      break;
    case "V":
      gen = "5";
      break;
    case "VI":
      gen = "6";
      break;
    case "VII":
      gen = "7";
      break;
    case "VIII":
      gen = "8";
      break;
    default:
      gen = "1";
  }
  await axios
    .get(`https://pokeapi.co/api/v2/generation/${gen}`)
    .then(async (generation) => {
      for (const result of generation.data.pokemon_species) {
        try {
          let pokemonResult = await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${result.name}`)
            .then((pokemon) => pokemon.data);
          const paths = result.url.split("/");
          const pokemonId = paths[paths.length - 2];
          const photo = `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`;
          pokemons.push({ pokemon: pokemonResult, photo: photo });
        } catch (err) {
          console.log("pokemon does not exist on API: ", result.name);
        }
      }
    });
  return pokemons;
}

export function* watchPokedex() {
  yield all([
    yield debounce(500, FILTER_POKEMONS_WITH_DEBOUNCE, filterPokemonsSaga),
    yield takeLatest(CHANGE_GENERATION, changeGenerationSaga),
  ]);
}
