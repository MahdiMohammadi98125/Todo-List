import "./App.css";
import { useEffect, useState } from "react";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return;
    return JSON.parse(localValue);
  });
  // to be call when the todos changed
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);
  // add to-do
  const addToDo = (item) => {
    setTodos((curTodo) => {
      return [
        ...curTodo,
        { id: crypto.randomUUID(), title: item, completed: false },
      ];
    });
  };

  // toggle checkbox
  const toggleTodo = (id, completed) => {
    return setTodos((curTodo) => {
      return curTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  // delete current to-do
  const deleteTodo = (id) => {
    setTodos((curTodo) => {
      return curTodo.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="container">
      <h1 className="header">to do list</h1>
      <NewToDoForm onSubmit={addToDo} />
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteToDo={deleteTodo} />
    </div>
  );
};
export default App;
