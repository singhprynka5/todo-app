import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../container/App";

afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
