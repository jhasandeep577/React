import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todoSlicers";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todoHandler = (e) => {
    console.log(input);
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>Todo</h3>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          type="text"
          size="small"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a Todo"
        />
        <Button
          variant="contained"
          color="success"
          size="small"
          type="submit"
          onClick={todoHandler}
        >
          Add
        </Button>
      </FormControl>
    </div>
  );
};
