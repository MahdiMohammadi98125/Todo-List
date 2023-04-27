import { useState } from "react";
export const NewToDoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  // handle when form submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  };

  return (
    <form className="new-item-form" onSubmit={submitHandler}>
      <div className="form-row">
        <label htmlFor="item">new item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>

      <button className="btn">add</button>
    </form>
  );
};
