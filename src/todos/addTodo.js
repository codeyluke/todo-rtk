import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todos";

export default function AddTodos() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
