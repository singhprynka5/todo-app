import React from "react";
import Items from "./Items";
import { Todo } from "../interfaces/Todo";

interface Props {
  todos: Todo[];
  handleTodoComplete: any;
}

const TodoList = ({ todos, handleTodoComplete }: Props) => {
  return (
    <ul className="list" data-testid="todo-list">
      {todos.map((todo, i) => (
        <Items
          key={i}
          todo={{
            task: todo.task,
            completed: todo.completed,
            id: todo.id
          }}
          handleTodoComplete={handleTodoComplete}
        />
      ))}
    </ul>
  );
};
export default TodoList;
