import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(
    "https://eager-supreme-appalachiosaurus.glitch.me/todos"
  );
  return response.data.todoList;
});

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todoList.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            key: nanoid(),
            value: value,
          },
        };
      },
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.todoList.push(...action.payload);
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const todosSelector = (state) => state.reducer.todos;
export default todoSlice.reducer;
