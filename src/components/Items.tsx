import React from "react";
import { Todo } from "../interfaces/Todo";

interface Props {
  todo: Todo;
  handleTodoComplete: any;
}

const Items = ({ todo, handleTodoComplete }: Props) => {
  return (
    <li
      className="list-items"
      onClick={() => handleTodoComplete(todo.id)}
      style={todo.completed ? { textDecoration: "line-through" } : {}}
      data-testid="todo-item"
    >
      {todo.task}
    </li>
  );
};

export default Items;
