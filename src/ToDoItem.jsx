export const ToDoItem = ({ completed, title, id, toggleTodo, deleteTodo }) => {
  const styles = {
    condition: completed ? "line-through" : "",
  };
  return (
    <li key={id}>
      <label style={{ textDecoration: styles.condition }}>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};
