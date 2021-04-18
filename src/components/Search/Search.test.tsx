import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Search } from "./index";

it("Renders correctly", () => {
  const { queryByTestId, queryByRole } = render(<Search />);

  expect(queryByTestId("search-button")).toBeTruthy();
  expect(queryByRole("search")).toBeTruthy();
});

describe("Input Value", () => {
  it("Updates on change", () => {
    const { queryByTestId } = render(<Search />);

    const searchInput = queryByTestId("search-button") as HTMLInputElement;

    fireEvent.change(searchInput!, {
      target: {
        value: "test",
      },
    });

    expect(searchInput.value).toBe("test");
  });
});
