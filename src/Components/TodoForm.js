import { TextField } from "@mui/material";
import UseInputState from "../hooks/UseInputState";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/appSlices";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [value, handleChange, reset] = UseInputState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    reset();
  };

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
