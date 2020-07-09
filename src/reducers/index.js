import { combineReducers } from "redux";
import { pokedexReducer } from "./pokedex";

export const Reducers = combineReducers({ pokedex: pokedexReducer });
