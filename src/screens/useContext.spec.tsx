import "jest-dom/extend-expect";
import React from "react";
import { fireEvent, render } from "react-testing-library";
import UseContext from "./useContext";

describe("UseContext component", () => {
  it("should work as expected", () => {
    const { getByTestId, getByText } = render(<UseContext />);
    const increaseButton = getByText("+");
    const decreaseButton = getByText("-");
    const text = getByTestId("count");

    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("0");

    fireEvent.click(increaseButton);
    expect(text).toHaveTextContent("1");

    fireEvent.click(decreaseButton);
    expect(text).toHaveTextContent("0");
  });
});
