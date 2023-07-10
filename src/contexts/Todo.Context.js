import { createContext } from "react";
import reducers from "../reducers/todo.reducers";
import UseLocalStorageReducer from "../reducers/LocalStorage.reducer";
const defaultTodos = [
  { task: "eat", id: 20, completed: true },
  { task: "code", id: 30, completed: false },
];
export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
  const [todo, dispatch] = UseLocalStorageReducer(
    "todos",
    defaultTodos,
    reducers
  );
  return (
    <TodoContext.Provider value={todo}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodoContext.Provider>
  );
}

// stamping my mark here
