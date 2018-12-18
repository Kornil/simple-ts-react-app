import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { About, Home } from "./../../containers";
import Routes from "./../../Routes";

describe("Routes", () => {
  it("default path should redirect to Home component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it("/about path should redirect to About component", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/about"]} initialIndex={0}>
        <Routes />
      </MemoryRouter>,
    );
    expect(wrapper.find(About)).toHaveLength(1);
  });
});
