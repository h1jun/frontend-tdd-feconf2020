export function setTasks(tasks) {
  return {
    type: "setTasks",
    payload: {
      tasks,
    },
  };
}

export function deleteTasks(id) {
  return {
    task: "deleteTask",
    payload: {
      id,
    },
  };
}
