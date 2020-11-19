import { combineReducers } from "redux";
import todosReducer from "./todos";
import recipesReducer from "./recipes";

const rootReducer = combineReducers({
  todos: todosReducer,
  recipes: recipesReducer,
});

export default rootReducer;
