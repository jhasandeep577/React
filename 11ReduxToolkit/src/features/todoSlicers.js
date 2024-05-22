import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load todos from localStorage
const loadTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];   // return if data exist else and empty array
};

// Save todos to localStorage
const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      saveTodosToLocalStorage(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export const reducers = todoSlice.reducer
