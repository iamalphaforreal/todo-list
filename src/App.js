import "./App.css";
import AppState from "./hooks/AppState";
import { Paper, Grid, Typography } from "@mui/material";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const todos = [{ task: "wake up", id: 1, completed: false }];

  const { todo, addTodo, deleteTodo, toggleTodo, editTodo } = AppState(todos);

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
              editedTodo={editTodo}
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
