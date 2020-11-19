import React from "react";
import AddTodos from "./addTodo";
import TodoList from "./todoList";

export default function Todos() {
  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodos />
      <TodoList />
    </div>
  );
}
