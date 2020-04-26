import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("render Items with passed props", () => {
  const handleTodoComplete = jest.fn();

  const todos = [
    { task: "complete assignment 1", completed: false, id: "3xofqc" },
    { task: "complete assignment 2", completed: true, id: "9g22s7" }
  ];

  const { getAllByTestId } = render(
    <TodoList todos={todos} handleTodoComplete={handleTodoComplete} />
  );
  expect(getAllByTestId("todo-item")).toHaveLength(2)
});
