import { createStore, action, thunk, computed } from "easy-peasy";

export default createStore({
  tasks: JSON.parse(localStorage.getItem('todolist')) || [], 
  setTasks: action((state, payload) => {
    state.tasks = payload;
  }),

  newTask: '',
  setNewTask: action((state, payload) => {
    state.newTask = payload;
  }),

  editTask: '',
  setEditTask: action((state, payload) => {
    state.editTask = payload;
  }),

  taskCount: computed((state) => state.tasks.length),
  getTaskById: computed((state) => {
    return (id) => state.task.find(post => (post.id).toString() === id);
  }),

  addTask: thunk(async (actions, newTask, helpers) => {
    const { tasks } =  helpers.getState();
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, complete: false, task: newTask };
    actions.setTasks([...tasks, myNewTask]);
  }),

  deleteTask: thunk(async (actions, id, helpers) => {
    const { tasks } = helpers.getState();
    actions.setTasks(tasks.filter((task) => task.id !== id));
  }),

  editTaskFn: thunk(async (actions, id, helpers) => {
    const { tasks, editTask } = helpers.getState();
    const listTasks = tasks.map((task) =>
      task.id === id ? { ...task, task: editTask === ''? task.task : editTask } : task
    );
    actions.setTasks(listTasks);
  }),

  completeTask: thunk(async (actions, id, helpers) => {
    const {tasks} = helpers.getState();
    actions.setTasks(tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    ))
  }),

})