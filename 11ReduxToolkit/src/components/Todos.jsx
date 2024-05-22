import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlicers";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((value) => (
        <ListItem key={value.id} disablePadding>
          <ListItemButton>
            <ListItemText primary={value.text} />
            {/* <Button
              onClick={() => dispatch(removeTodo(value.id))}
              variant="outlined"
              size="small"
            >
              Edit
            </Button> */}
            <Button
              onClick={() => dispatch(removeTodo(value.id))}
              variant="outlined"
              color="error"
              size="small"
            >
              Delete
            </Button>
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
};

export default Todos;
