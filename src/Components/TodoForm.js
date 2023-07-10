import { TextField } from "@mui/material";
import UseInputState from "../hooks/UseInputState";
import React, { useContext } from "react";
import { DispatchContext } from "../contexts/Todo.Context";

const TodoForm = () => {
  const dispatch = useContext(DispatchContext);

  const [value, handleChange, reset] = UseInputState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };

  console.log("TODO FORM RENDER");

  return (
    <div>
      <form onSubmit={submit} style={{ textAlign: "center" }}>
        <TextField
          value={value}
          onChange={handleChange}
          variant="standard"
          label="input todo"
          fullWidth
          style={{ boxShadow: "5px 10px 18px #888888" }}
        />
      </form>
    </div>
  );
};

export default TodoForm;
