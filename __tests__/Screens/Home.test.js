// Link.react.test.js
import React from "react";
import "babel-polyfill";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../src/store";
import { Home } from "../../src/Screens";

test("Rendering Home", () => {
  const component = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
