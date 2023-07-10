import { v4 as uuidv4 } from "uuid";

const reducers = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { task: action.task, id: uuidv4(), completed: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};

export default reducers;
