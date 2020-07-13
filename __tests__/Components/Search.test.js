// Link.react.test.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../src/store";
import { Search } from "../../src/Components";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Rendering Search", () => {
  const component = mount(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
