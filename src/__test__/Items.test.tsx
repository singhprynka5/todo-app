import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Items from "../components/Items";

test("render Items with passed props and click event", () => {
  const handleTodoComplete = jest.fn();

  const todo = { task: "complete assignment", completed: false, id: "3xofqc" };
  const id = "3xofqc";
  const { getByTestId } = render(
    <Items todo={todo} handleTodoComplete={handleTodoComplete} />
  );

  expect(getByTestId("todo-item").textContent).toBe("complete assignment");

  fireEvent.click(getByTestId("todo-item"));
  expect(handleTodoComplete).toBeCalledWith(id);
  expect(handleTodoComplete).toHaveBeenCalledTimes(1);
});
