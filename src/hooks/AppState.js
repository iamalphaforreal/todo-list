import { v4 as uuidv4 } from "uuid";
import UseLocalStorage from "./UseLocalStorage";

const AppState = (todos) => {
  const [todo, setTodo] = UseLocalStorage("todo", todos);

  return {
    todo,
    addTodo: (value) => {
      setTodo([...todo, { task: value, id: uuidv4(), completed: false }]);
    },
    deleteTodo: (id) => {
      const updatedTodo = todo.filter((todo) => todo.id !== id);
      setTodo(updatedTodo);
    },

    toggleTodo: (id) => {
      const toggle = todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodo(toggle);
    },

    editTodo: (id, newTask) => {
      const toggle = todo.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      );
      setTodo(toggle);
    },
  };
};

export default AppState;
