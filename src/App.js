import "./App.css";
import { Paper, Grid, Typography } from "@mui/material";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import MadeBy from "./Components/MadeBy";

function App() {
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
            <TodoForm />
            <TodoList />
            <MadeBy />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

// todo-app
//  todo-form
//   todo-list
//    each-todos
