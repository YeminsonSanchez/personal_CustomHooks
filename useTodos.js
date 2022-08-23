import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer";

export const useTodos = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "Learn Inglish",
    //   done: false,
    // },
  ];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleRemoveTodo = (id) => {
    const action = {
      type: "[TODO] Remove todo",
      payload: id,
    };

    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle todo",
      payload: id,
    };

    dispatchTodo(action);
  };

  const pendingTodo = () => todos.filter((todo) => !todo.done).length;
  const counterTodo = () => todos.length;
  const completedTodo = () => todos.filter((todo) => todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
    pendingTodo,
    counterTodo,
    completedTodo,
  };
};
