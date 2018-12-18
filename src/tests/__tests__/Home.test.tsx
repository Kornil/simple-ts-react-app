import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Home } from "./../../containers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Home user="Default User" />, div);
  unmountComponentAtNode(div);
});
