import React from "react";
import ReactDOM from "react-dom";
import { cleanup, fireEvent, getByTestId, render } from "react-testing-library";
import App from ".";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App loads with initial state of 0", () => {
  const { container } = render(<App />);
  const countValue = getByTestId(container, "countvalue");
  expect(countValue.textContent).toBe("0");
});

it("Increment and decrement buttons work", () => {
  const { container } = render(<App />);
  const countValue = getByTestId(container, "countvalue");
  const increment = getByTestId(container, "incrementButton");
  const decrement = getByTestId(container, "decrementButton");

  expect(countValue.textContent).toBe("0");

  fireEvent.click(increment);
  expect(countValue.textContent).toBe("1");
  fireEvent.click(decrement);
  expect(countValue.textContent).toBe("0");
});

it("Submitting a name via the input field changes the name state value", () => {
  const { container, rerender } = render(<App />);
  expect(window.localStorage.getItem("name")).toBe("Brian");
  const nameValue = getByTestId(container, "namevalue");
  const inputName = getByTestId(container, "inputName");

  const submitButton = getByTestId(container, "submitRefButton");
  const newName = "Ben";

  fireEvent.change(inputName, { target: { value: newName } });
  fireEvent.click(submitButton);
  expect(nameValue.textContent).toEqual(newName);

  rerender(<App />);
  expect(window.localStorage.getItem("name")).toBe(newName);
});
