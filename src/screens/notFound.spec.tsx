import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import NotFound from "./notFound";

describe("NotFound component", () => {
  it("should render as expected", () => {
    const { getByTestId } = render(<NotFound />);
    const renderedText = getByTestId("renderedText");
    expect(renderedText).toHaveTextContent(/sorry/i);
  });
});
