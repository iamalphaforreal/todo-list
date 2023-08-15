import { TextField } from "@mui/material";
import useInputState from "../hooks/UseInputState";
//import { useContext } from "react";
//import { DispatchContext } from "../contexts/Todo.Context";
import { useDispatch } from "react-redux";
import { editTodo } from "../features/appSlices";

const EditTodo = ({ id, task, toggle }) => {
  //const dispatch = useContext(DispatchContext);
  const dispatch = useDispatch();

  const [value, handleChange, reset] = useInputState(task);

  const sumAll = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: id, newTask: value }));
    //dispatch({ type: "EDIT", id: id, newTask: value });
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
