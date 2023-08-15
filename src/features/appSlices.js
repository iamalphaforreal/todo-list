import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const storedTodos = JSON.parse(localStorage.getItem("todos"));

const initialState = {
  todos: storedTodos?.todo?.todos ? storedTodos?.todo?.todos : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare(task) {
        return {
          payload: {
            id: nanoid(),
            task,
            completed: false,
            date: new Date().toISOString(),
          },
        };
      },
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo && (todo.completed = !todo.completed);
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo && (todo.task = action.payload.newTask);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo, removeTodo, editTodo } = todoSlice.actions;
