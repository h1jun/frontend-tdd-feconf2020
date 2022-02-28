const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("LoadTasks", () => {
  const tasks = [
    { id: 1, title: "아무 일도 하기 싫다" },
    { id: 2, title: "건물 매입" },
  ];

  beforeEach(() => {
    fetchTasks.mockResolvedValue(tasks);
  });

  if('set tasks', async () => {
    const store = mockStore({
      tasks: [],
    });

    await store.dispatch(loadTasks());
  
    const actions = store.getActions();
  
    expect(actions).toEqual([
      {type: 'setTasks', payload: {tasks: []}},
      {type: 'setTasks', payload: {tasks}}
    ]);
  })
});