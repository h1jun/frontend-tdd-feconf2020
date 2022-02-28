import React from "react";

import { render } from "@testing-library/react";

import List from "./List";

// with tasks
// renders tasks

// without tasks
// renders no tasks message

describe("List", () => {
  context("with tasks", () => {
    const tasks = [
      { id: 1, title: "아무 일도 하기 싫다" },
      { id: 2, title: "건물 매입" },
    ];

    it("renders tasks", () => {
      const { container } = render(<List tasks={tasks} />);
      expect(container).toHaveTextContent("아무 일도 하기 싫다");
      expect(container).toHaveTextContent("건물 매입");
    });
  });

  context("without tasks", () => {
    const tasks = [];

    it("renders no task message", () => {
      const { container } = render(<List tasks={tasks} />);
      expect(container).toHaveTextContent("할 일이 없어요!");
    });
  });
});
