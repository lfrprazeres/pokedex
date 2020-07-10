import { all } from "redux-saga/effects";
import { watchPokedex } from "./pokedex";

export default function* Saga() {
  yield all([watchPokedex()]);
}
