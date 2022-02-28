import React from "react";
import { useSelector } from "react-redux";

import { render } from "@testing-library/react";

import ListContainer from "./ListContainer";

import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("App", () => {
  //useSelector는 가짜로 동작해서 아래와 같은 상태를 돌려준다.
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );
  it("renders tasks", () => {
    const { container } = render(<ListContainer />);
    expect(container).toHaveTextContent("아무 일도 하기 싫다");
  });
});
