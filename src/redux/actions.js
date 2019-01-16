import { v4 } from "node-uuid";
import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = content => ({
  type: ADD_TODO,
  id: v4(),
  content
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
