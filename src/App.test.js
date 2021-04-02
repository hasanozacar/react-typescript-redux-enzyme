import React from "react";
import App from "./App";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import "../setupTests";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
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
        <App />
      </Router>
    </Provider>
  );
  it("renders without crashing", () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
});
