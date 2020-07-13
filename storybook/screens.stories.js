import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/store";
import { Home } from "../src/Screens";
import "../src/index.css";
import { Container } from "./style";

export default { title: "Screens" };

export const RenderHome = () => {
  return (
    <Container>
      <p>
        To render Home, you need to wrap it into one Provider, and the screen
        will to everything for you!!!
      </p>
      <p>to wrap it into the main style, just use the Index css! </p>

      <Provider store={store}>
        <Home />
      </Provider>
    </Container>
  );
};

export const RenderAbout = () => {
  return (
    <Container>
      <p>
        About depends on URL and/or the pokemon list, so if you want to know how
        it works, the Screen catchs the pokemon name in the url and search it in
        the pokemon list, if it doesn't exist, so the screen search for the
        pokemon in the API
      </p>
      <p>to render About just type {"{URL}/PokemonName"}</p>
    </Container>
  );
};
