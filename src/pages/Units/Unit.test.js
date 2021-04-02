import React from "react";
import Units from ".";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import "../../setupTests";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";
import { Button, Checkbox, Slider, Table } from "antd";

Enzyme.configure({ adapter: new Adapter() });

describe("Units", () => {
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
        <Units
          units={[
            {
              id: 104,
              name: "Elite Woad Raider",
              description: "Upgraded Woad Raider",
              expansion: "Age of Kings",
              age: "Imperial",
              cost: {
                Food: 65,
                Gold: 25,
              },
              build_time: 10,
              reload_time: 2,
              movement_rate: 1.38,
              line_of_sight: 5,
              hit_points: 80,
              attack: 13,
              armor: "0/1",
              attack_bonus: ["+3 eagles", "+3 buildings"],
            },
            {
              id: 104,
              name: "Elite Woad Raider",
              description: "Upgraded Woad Raider",
              expansion: "Age of Kings",
              age: "Imperial",
              cost: {
                Gold: 25,
              },
              build_time: 10,
              reload_time: 2,
              movement_rate: 1.38,
              line_of_sight: 5,
              hit_points: 80,
              attack: 13,
              armor: "0/1",
              attack_bonus: ["+3 eagles", "+3 buildings"],
            },
          ]}
        />
      </Router>
    </Provider>
  );
  it("renders without crashing", () => {
    expect(wrapper.find(Units).length).toEqual(1);
  });
  it("should click button render correctly table", () => {
    wrapper.find(Button).at(0).props().onClick();
    expect(wrapper.find(Table).length).toEqual(1);
  });
  it("should on change checkbox render correctly table", () => {
    wrapper.find(Checkbox).at(1).props().onChange();
    expect(wrapper.find(Table).length).toEqual(1);
  });
  it("should on change render correctly table", () => {
    wrapper.find(Slider).at(1).props().onChange();
    expect(wrapper.find(Table).length).toEqual(1);
  });
});
