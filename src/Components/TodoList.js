import React, { useContext } from "react";
import Todo from "./Todo";
import { Container, List, Divider } from "@mui/material";
import { TodoContext } from "../contexts/Todo.Context";

const TodoList = () => {
  const todo = useContext(TodoContext);
  if (todo.length)
    return (
      <Container>
        <List>
          {todo.map((task, index) => (
            <div key={task.id}>
              <Todo {...task} />
              {index < todo.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Container>
    );
};

export default TodoList;
