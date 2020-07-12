import { combineReducers } from "redux";
import { pokedexReducer } from "./pokedex";
import { appReducer } from "./app";

export const Reducers = combineReducers({
  pokedex: pokedexReducer,
  app: appReducer,
});
