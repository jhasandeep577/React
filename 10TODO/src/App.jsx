//  Not  a completed project
import { useState, useEffect } from "react";
import { TodoContextProvider } from "./contexts";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length > 0) {
      setTodo(todo);
    }
  }, []);

  useEffect(() => {
    JSON.stringify(localStorage.setItem("todos", todo));
  }, [todo]);

  const addTodo = (todoValue) => {
    setTodo((prevTodos) => [...prevTodos, { id: Date.now, ...todoValue }]);
  };
  const updateTodo = (id, newTodo) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => (todo === id ? newTodo : todo))
    );
  };
  const todoComplete = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((oldTodo) =>
        oldTodo.id === id
          ? { ...oldTodo, completed: !oldTodo.completed }
          : oldTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo((oldTodos) => oldTodos.filter((oldtodo) => oldtodo.id !== id));
  };

  return (
    <TodoContextProvider
      value={{ todo, setTodo, addTodo, updateTodo, todoComplete, deleteTodo }}
    >
      <div>TODO</div>
    </TodoContextProvider>
  );
}

export default App;
