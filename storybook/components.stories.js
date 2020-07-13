import React, { useState } from "react";
import {
  Image,
  Loading,
  Modal,
  PokemonCard,
  Search,
  Type,
} from "../src/Components";
import { Container } from "./style";
import { Provider } from "react-redux";
import { store } from "../src/store";
import "../src/index.css";
import axios from "axios";

export default { title: "Components" };

export const RenderImage = () => {
  return (
    <Container>
      <p style={{ marginTop: 50, textAlign: "center" }}>
        To render Image you need to specify your source and your size, and it'll
        be responsive
      </p>
      <p style={{ textAlign: "center" }}>
        to wrap it into the main style, just use the Index css!{" "}
      </p>

      <Image
        source={"https://pokeres.bastionbot.org/images/pokemon/1.png"}
        size={"150px"}
      />
    </Container>
  );
};

export const RenderLoading = () => {
  return (
    <Container>
      <p>
        It's the Loading itself, just throw it in when you need one loading
        screen
      </p>
      <Loading />
    </Container>
  );
};

export const RenderModal = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <p>To render modal you need to pass just the visibility bool.</p>
      <button onClick={() => setVisible(true)}>click me to open modal</button>
      <Modal visible={visible}>
        <button
          onClick={() => setVisible(false)}
          style={{ backgroundColor: "white", padding: "10px 40px" }}
        >
          click me to close modal
        </button>
      </Modal>
    </Container>
  );
};

export const RenderPokemonCard = () => {
  const [data, setData] = useState(null);
  axios.get("https://pokeapi.co/api/v2/pokemon/1").then((resolve) =>
    setData({
      photo: "https://pokeres.bastionbot.org/images/pokemon/1.png",
      pokemon: resolve.data,
    })
  );
  return (
    <Container>
      <p style={{ marginBottom: 50 }}>
        To render the pokemon card you need to pass to it the pokemon data and
        the Provider to show which color it will use.
      </p>
      <Provider store={store}>{data && <PokemonCard data={data} />}</Provider>
    </Container>
  );
};

export const RenderSearch = () => {
  return (
    <Container>
      <p>
        To render the search you just need to wrap it into Provider and call it
      </p>
      <Provider store={store}>
        <Search />
      </Provider>
    </Container>
  );
};

export const RenderType = () => {
  const types = [
    "grass",
    "dark",
    "bug",
    "dragon",
    "fire",
    "psychic",
    "fighting",
  ];
  return (
    <Container>
      <p>
        To render the Type you just need to wrap it into Provider and pass the
        type you need to render
      </p>
      <Provider store={store}>
        {types.map((type, key) => (
          <Type type={type} key={key} />
        ))}
      </Provider>
    </Container>
  );
};
