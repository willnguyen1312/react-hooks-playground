import { XhrMock } from "@react-mock/xhr";
import "jest-dom/extend-expect";
import React from "react";
import { fireEvent, render, waitForElement } from "react-testing-library";
import UseEffect from "./useEffect";

describe("UseEffect component", () => {
  it("should work as expected", async () => {
    const getResReact = () => async (req, res) =>
      res.status(200).body({
        hits: [
          {
            objectID: 0,
            url: "00",
            title: "0"
          }
        ]
      });

    const getResRedux = () => async (req, res) =>
      res.status(200).body({
        hits: [
          {
            objectID: 1,
            url: "11",
            title: "1"
          }
        ]
      });
    const { container, getByTestId, getAllByTestId, rerender } = render(
      <XhrMock
        mocks={[
          {
            url: "https://hn.algolia.com/api/v1/search?query=react",
            method: "GET",
            response: getResReact()
          },
          {
            url: "https://hn.algolia.com/api/v1/search?query=redux",
            method: "GET",
            response: getResRedux()
          }
        ]}
      >
        <UseEffect />
      </XhrMock>
    );
    const input = getByTestId("input");

    expect(container).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe("react");

    fireEvent.change(input, { target: { value: "redux" } });
    expect((input as HTMLInputElement).value).toBe("redux");

    const list = await waitForElement(() => getAllByTestId("content"));
    expect(list.length).toBe(1);
  });
});
