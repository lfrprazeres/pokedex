import {
  pokedexReducer as reducer,
  defaultAdvancedFilter,
  initialState as reducerInitialState,
} from "../../src/reducers/pokedex";
import * as actions from "../../src/actions/pokedex";

let initialState;

describe("Pokedex reducer test", () => {
  beforeEach(() => {
    initialState = reducerInitialState;
  });
  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FILTER_POKEMONS", () => {
    let filter = (filter) => {
      return reducer(initialState, {
        type: actions.FILTER_POKEMONS,
        payload: filter,
      });
    };
    initialState = filter("Bulbasaur");
    expect(initialState).toEqual({
      ...reducerInitialState,
      filter: "Bulbasaur",
    });
  });
  it("should handle CHANGE_GENERATION", () => {
    let change = (generation) => {
      return reducer(initialState, {
        type: actions.CHANGE_GENERATION,
        payload: { generation },
      });
    };
    initialState = change("I");
    expect(initialState).toEqual({
      ...reducerInitialState,
      pokemons: [],
      useInfiniteLoading: false,
      generation: "I",
    });
  });
  it("should handle RESET_ADVANCED_FILTERS", () => {
    let reset = (range) => {
      return reducer(initialState, {
        type: actions.RESET_ADVANCED_FILTERS,
        payload: range,
      });
    };
    initialState = reset(20);
    expect(initialState).toEqual({
      ...reducerInitialState,
      pokemons: null,
      useInfiniteLoading: true,
      advancedFilter: { ...defaultAdvancedFilter, range: [1, 20] },
    });
  });
});
