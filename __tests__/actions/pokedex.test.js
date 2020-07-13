import * as actions from "../../src/actions/pokedex";

describe("Fire pokedex gottaCatchThemAll action", () => {
  it("should have the right endpoint", () => {
    let expectedEndpoint =
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    expect(
      actions.gottaCatchThemAll(20, 0)["@@redux-api-middleware/RSAA"].endpoint
    ).toStrictEqual(expectedEndpoint);
  });
  it("should have the right method", () => {
    let expectedEndpoint = "GET";
    expect(
      actions.gottaCatchThemAll(20, 0)["@@redux-api-middleware/RSAA"].method
    ).toStrictEqual(expectedEndpoint);
  });
  it("should have the right pending type", () => {
    let expectedType = actions.GOTTA_CATCH_THEM_ALL;
    expect(
      actions.gottaCatchThemAll(20, 0)["@@redux-api-middleware/RSAA"].types[0]
        .type
    ).toStrictEqual(expectedType);
  });
  it("should have the right success type", () => {
    let expectedType = actions.CATCHED_THEM_ALL;
    expect(
      actions.gottaCatchThemAll(20, 0)["@@redux-api-middleware/RSAA"].types[1]
        .type
    ).toStrictEqual(expectedType);
  });
  it("should have the right failure type", () => {
    let expectedType = actions.NOT_CATCHED_THEM_ALL;
    expect(
      actions.gottaCatchThemAll(20, 0)["@@redux-api-middleware/RSAA"].types[2]
        .type
    ).toStrictEqual(expectedType);
  });
});

describe("Fire pokedex filterPokemons action", () => {
  it("should have the right type and payload", () => {
    let expectedType = actions.FILTER_POKEMONS_WITH_DEBOUNCE;
    let expectedPayload = "bulbasaur";
    expect(actions.filterPokemons("bulbasaur").type).toStrictEqual(
      expectedType
    );
    expect(actions.filterPokemons("bulbasaur").payload).toStrictEqual(
      expectedPayload
    );
  });
});

describe("Fire pokedex changeGeneration action", () => {
  it("should have the right type and payload", () => {
    let expectedType = actions.CHANGE_GENERATION;
    let expectedPayload = "I";
    expect(actions.changeGeneration("I").type).toStrictEqual(expectedType);
    expect(actions.changeGeneration("I").payload.generation).toStrictEqual(
      expectedPayload
    );
  });
});

describe("Fire pokedex resetAdvancedFilters", () => {
  it("should have the right type and payload", () => {
    let expectedType = actions.RESET_ADVANCED_FILTERS;
    let expectedPayload = [0, 1];
    expect(actions.resetAdvancedFilters([0, 1]).type).toStrictEqual(
      expectedType
    );
    expect(actions.resetAdvancedFilters([0, 1]).payload).toStrictEqual(
      expectedPayload
    );
  });
});

describe("Fire pokedex changeAdvancedFilters", () => {
  it("should have the right type ", () => {
    let expectedType = actions.CHANGE_ADVANCED_FILTERS;
    expect(actions.changeAdvancedFilters().type).toStrictEqual(expectedType);
  });
});
