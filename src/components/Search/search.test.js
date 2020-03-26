import React from "react";
import { shallow } from "enzyme";


describe ("<Search />", () => {
    let wrapper
    wrapper = shallow(<form id="search"></form>)

    it("checks if submit value", () => {
        expect(wrapper.find("form").simulate("submit"))
      });
})