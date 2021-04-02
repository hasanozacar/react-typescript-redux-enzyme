import React from "react";
import UnitDetail from ".";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import "../../setupTests";
import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("UnitDetail", () => {
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
      <UnitDetail
        unitDetail={{
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
        }}
      />
    </Provider>
  );
  it("renders without crashing", () => {
    expect(wrapper.find(UnitDetail).length).toEqual(1);
  });
});
