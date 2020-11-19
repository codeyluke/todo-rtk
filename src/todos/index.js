import React from "react";
import AddTodos from "./addTodo";
import { useSelector } from "react-redux";
import { todosSelector } from "../slices/todos";

export default function Todos() {
  const { todoList } = useSelector(todosSelector);
  console.log(todoList);
  return (
    <div>
      <h1>Hello</h1>
      <AddTodos />
      {todoList.map((todo) => {
        return (
          <div key={todo.key}>
            <p>
              {todo.key} - {todo.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
