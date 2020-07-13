// Link.react.test.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../src/store";
import { Type } from "../../src/Components";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
const types = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

test("Rendering Types", () => {
  types.map((type) => {
    const component = mount(
      <Provider store={store}>
        <Type type={type} />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
