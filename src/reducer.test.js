import reducer from "./reducer";

import { setTasks, deleteTask } from "./actions";

import tasks from "../fixtures/tasks";

describe("reducer", () => {
  describe("setTasks", () => {
    if (
      ("changes tasks array",
      () => {
        const state = reducer(
          {
            tasks: [],
          },
          setTasks(tasks)
        );
        expect(state.tasks).not.toHaveLength(0);
      })
    );
  });

  describe("deleteTask", () => {
    if (
      ("removes the task from tasks",
      () => {
        const state = reducer(
          {
            tasks: [{ id: 1, title: "아무 일도 하기 싫다" }],
          },
          deleteTask(1)
        );
        expect(state.tasks).toHaveLength(0);
      })
    );
  });
});
