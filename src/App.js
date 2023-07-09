import "./App.css";
import { Paper, Grid, Typography } from "@mui/material";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

function App() {
  // const initialTodo = [
  //   { task: " make my bed", id: 1, completed: false },
  //   { task: " cook the meal", id: 2, completed: true },
  //   { task: "take the dog out", id: 3, completed: false },
  // ];
  const todos = JSON.parse(window.localStorage.getItem("todos"));
  const [todo, setTodo] = useState(todos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const addTodo = (value) => {
    setTodo([...todo, { task: value, id: uuidv4(), completed: false }]);
  };

  const deleteTodo = (id) => {
    const updatedTodo = todo.filter((todo) => todo.id !== id);
    setTodo(updatedTodo);
  };

  const toggleTodo = (id) => {
    const toggle = todo.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(toggle);
  };

  const editedTodo = (id, newTask) => {
    const toggle = todo.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodo(toggle);
  };

  return (
    <>
      <div className="App">
        <Typography style={{ align: "center" }} variant="h5">
          Todo List App
        </Typography>
      </div>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} md={8} lg={4}>
          <Paper elevation={11} md={8}>
            <TodoForm addTodo={addTodo} />
            <TodoList
              deleteTodo={deleteTodo}
              todo={todo}
              toggleTodo={toggleTodo}
              editedTodo={editedTodo}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

// todo-app
//  todo-form
//    todo-list
//    each-todos
