import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, todosSelector } from "../slices/todos";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todoList, status } = useSelector(todosSelector);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {status === "loading" ? (
        <p>loading</p>
      ) : (
        todoList.map((todo) => {
          return (
            <div key={todo.key}>
              <p>
                {todo.key} - {todo.value}
              </p>
            </div>
          );
        })
      )}
    </>
  );
}
