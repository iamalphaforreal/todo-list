import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const TodoList = (props) => {
  return (
    <Container>
      <List>
        {props.todo.map((task) => (
          <>
            <ListItem>
              <ListItemText key={task.id}>{task.task}</ListItemText>
            </ListItem>
            {task.length - 1 ? null : <Divider />}
          </>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
