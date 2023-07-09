import { TextField } from "@mui/material";
import UseInputState from "../hooks/UseInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = UseInputState("");

  const submit = (e) => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  const boxStyle = {
    boxShadow: "5px 10px 18px #888888",
  };
  return (
    <div>
      <form onSubmit={submit} style={{ textAlign: "center" }}>
        <TextField
          value={value}
          onChange={handleChange}
          variant="outlined"
          setTodo={value}
          variant="standard"
          label="input todo"
          fullWidth
          // sx={{ width: 500 }}
          style={boxStyle}
        />
      </form>
    </div>
  );
};

export default TodoForm;
