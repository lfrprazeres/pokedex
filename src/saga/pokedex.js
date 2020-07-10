import { debounce, all, put } from "redux-saga/effects";
import {
  FILTER_POKEMONS,
  FILTER_POKEMONS_WITH_DEBOUNCE,
} from "../actions/pokedex";

function* filterPokemonsSaga({ payload }) {
  yield put({
    type: FILTER_POKEMONS,
    payload,
  });
}

export function* watchPokedex() {
  yield all([
    yield debounce(1000, FILTER_POKEMONS_WITH_DEBOUNCE, filterPokemonsSaga),
  ]);
}
