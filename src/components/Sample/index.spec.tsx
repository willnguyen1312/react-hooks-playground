import "jest-dom/extend-expect";
import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, render } from "react-testing-library";
import App from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App loads with initial state of 0", () => {
  const { getByTestId } = render(<App />);
  const countValue = getByTestId("countvalue");
  expect(countValue.textContent).toBe("0");
});

it("Increment and decrement buttons work", () => {
  const { getByTestId } = render(<App />);
  const countValue = getByTestId("countvalue");
  const increment = getByTestId("incrementButton");
  const decrement = getByTestId("decrementButton");

  expect(countValue.textContent).toBe("0");

  fireEvent.click(increment);
  expect(countValue.textContent).toBe("1");
  fireEvent.click(decrement);
  expect(countValue.textContent).toBe("0");
});

it("Submitting a name via the input field changes the name state value", () => {
  const { getByTestId, rerender } = render(<App />);
  expect(window.localStorage.getItem("name")).toBe("Brian");
  const nameValue = getByTestId("namevalue");
  const inputName = getByTestId("inputName");

  const submitButton = getByTestId("submitRefButton");
  const newName = "Ben";

  fireEvent.change(inputName, { target: { value: newName } });
  fireEvent.click(submitButton);
  expect(submitButton).toHaveAttribute("type", "button");
  expect(nameValue.textContent).toEqual(newName);

  expect(window.localStorage.getItem("name")).toBe(newName);
});
