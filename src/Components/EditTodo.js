import { TextField } from "@mui/material";
import useInputState from "../hooks/UseInputState";
import { useContext } from "react";
import { DispatchContext } from "../contexts/Todo.Context";

const EditTodo = ({ id, task, toggle }) => {
  const dispatch = useContext(DispatchContext);

  const [value, handleChange, reset] = useInputState(task);

  const sumAll = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", id: id, newTask: value });
    reset();
    toggle();
  };
  return (
    <form onSubmit={sumAll}>
      <TextField
        variant="standard"
        onChange={handleChange}
        value={value}
        autoFocus
        style={{
          width: "20rem",
          marginTop: "2rem",
          marginLeft: "3rem",
        }}
      />
    </form>
  );
};

export default EditTodo;
