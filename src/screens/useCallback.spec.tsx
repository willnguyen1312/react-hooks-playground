import "jest-dom/extend-expect";
import React from "react";
import { fireEvent, render } from "react-testing-library";
import UseCallBack from "./useCallback";

describe("UseCallBack component", () => {
  it("should work as expected", () => {
    const { getByText, getAllByText } = render(<UseCallBack />);
    const addButton = getByText("Add");

    expect(getByText(/Number: 0/i)).toBeInTheDocument();

    fireEvent.click(addButton);
    fireEvent.click(addButton);

    expect(getByText(/Number: 2/i)).toBeInTheDocument();

    const allRenderedText = getAllByText(/Number/i);
    expect(allRenderedText.length).toBe(3);
  });
});
