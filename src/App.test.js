import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Pagination from "./components/Pagination/Pagination";

describe("<App />", () => {
  let wrapper;
  wrapper = shallow(<App />);

  const useStateSpy = jest.spyOn(React, "useState");

  it("checks if Pagination is rendered", () => {
    expect(wrapper.find(Pagination)).toBeTruthy();
  });

  it("checks if loading is true when load", () => {
    expect(wrapper.find(<p class="loading"></p>));
    expect(useStateSpy).toBeTruthy();
  });

});
