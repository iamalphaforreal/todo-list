import "./App.css";
import { Paper, Grid, Typography } from "@mui/material";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { useState } from "react";

function App() {
  const initialTodo = [
    { task: " make my bed", id: 1, completed: false },
    { task: " cook the meal", id: 2, completed: true },
    { task: "take the dog out", id: 3, completed: false },
  ];

  const [todo, setTodo] = useState(initialTodo);

  const addTodo = (value) => {
    setTodo([...todo, { task: value, id: 4, completed: false }]);
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
          <Paper elevation={11} md={8} style={{ height: "500px" }}>
            <TodoForm addTodo={addTodo} />
            <TodoList todo={todo} />
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
