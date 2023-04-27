import { ToDoItem } from "./ToDoItem";
export const ToDoList = ({ todos, toggleTodo, deleteToDo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => (
        <ToDoItem
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteToDo}
        />
      ))}
    </ul>
  );
};
