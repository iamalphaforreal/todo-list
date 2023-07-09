import { TextField } from "@mui/material";
import useInputState from "../hooks/UseInputState";

const EditTodo = ({ id, task, toggle, editedTodo }) => {
  const [value, handleChange, reset] = useInputState(task);

  const sumAll = (e) => {
    e.preventDefault();
    editedTodo(id, value);
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
          width: "30rem",
          marginTop: "2rem",
          marginLeft: "3rem",
        }}
      />
    </form>
  );
};

export default EditTodo;
