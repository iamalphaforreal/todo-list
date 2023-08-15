import Todo from "./Todo";
import { Container, List, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import Time from "./Time";
import NoTodoAddedYet from "./NoTodoAddedYet";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return todos.length ? (
    <Container>
      <List>
        {todos.map((task, index) => (
          <div key={task.id}>
            <Todo {...task} />
            <Time timestamp={task.date} />
            {index < todos.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Container>
  ) : (
    <NoTodoAddedYet />
  );
};

export default TodoList;
