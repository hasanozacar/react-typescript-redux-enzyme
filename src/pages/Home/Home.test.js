import React from "react";
import Home from ".";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import "../../setupTests";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

describe("Home", () => {
  const mockStore = configureStore();
  const store = mockStore({
    news: {
      title: "Mock Title",
      urlToImage: "www.google.com",
      description: "Mock Description",
      url: "bbc.com",
    },
    loading: false,
  });
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
  it("renders without crashing", () => {
    expect(wrapper.find(Home).length).toEqual(1);
  });
});
