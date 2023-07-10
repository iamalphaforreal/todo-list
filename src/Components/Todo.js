import { ListItem, ListItemText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ListItemSecondaryAction } from "@mui/material";
import UseToggleState from "../hooks/UseToggleState";
import EditTodo from "./EditTodo";
import { DispatchContext } from "../contexts/Todo.Context";
import React, { useContext, memo } from "react";

const Todo = ({ task, id, completed }) => {
  const dispatch = useContext(DispatchContext);
  const [edit, toggle] = UseToggleState(false);
  console.log(task);
  return (
    <div>
      {edit ? (
        <EditTodo task={task} id={id} toggle={toggle} />
      ) : (
        <ListItem style={{ height: "58px" }}>
          <Checkbox
            color="primary"
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>

          <ListItemSecondaryAction>
            <IconButton onClick={() => toggle()}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={() => dispatch({ type: "REMOVE", id: id })}>
              <DeleteIcon color="secondary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </div>
  );
};

export default memo(Todo);
