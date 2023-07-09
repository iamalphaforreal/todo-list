import React from "react";
import Todo from "./Todo";
import { Container, List, Divider } from "@mui/material";

const TodoList = ({ todo, deleteTodo, toggleTodo, editedTodo }) => {
  if (todo.length)
    return (
      <Container>
        <List>
          {todo.map((task, index) => (
            <>
              <Todo
                {...task}
                deleteTodo={deleteTodo}
                key={task.id}
                editedTodo={editedTodo}
                toggleTodo={toggleTodo}
              />
              <Divider />
            </>
          ))}
        </List>
      </Container>
    );
};

export default TodoList;
